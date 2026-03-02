const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");
const nodemailer = require("nodemailer");

// ─── Google Rating ────────────────────────────────────────────────────────────

exports.getGoogleRating = onRequest({
  cors: true,
  secrets: ["GOOGLE_MAPS_API_KEY"]
}, async (req, res) => {

  const placeId = "ChIJdfSH80STkkYRqucRClE5ook";
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const lang = req.query.lang || "et";

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=${lang}&key=${apiKey}`
    );

    if (response.data.status !== "OK") {
      return res.status(400).json({
        status: response.data.status,
        message: response.data.error_message || "No message"
      });
    }

    res.json({
      rating: response.data.result.rating || 5.0,
      reviewsCount: response.data.result.user_ratings_total || 0,
      reviews: response.data.result.reviews || []
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ─── Ping ─────────────────────────────────────────────────────────────────────

exports.ping = onRequest({ cors: true }, (req, res) => {
  res.status(200).send("pong");
});

// ─── Email builder ────────────────────────────────────────────────────────────

/**
 * Builds the customer auto-reply email (HTML + plain text).
 * {NAME} rule: if name present → ", name"; else "".
 */
function buildCustomerEmail(lang, nameSuffix, carNumber, message, phone) {

  const subjects = {
    et: "Täname! Oleme teie päringu kätte saanud",
    ru: "Спасибо! Мы получили вашу заявку",
    en: "Thank you! We've received your request",
    fi: "Kiitos! Olemme vastaanottaneet pyyntösi"
  };

  // Full greeting texts — phone number is embedded here, NOT repeated below.
  const greetings = {
    et: `Tere${nameSuffix},<br><br>Aitäh, et kirjutasite meile! Teie päring on kätte saadud ja võtame selle peagi ette. Vastame teile 24 tunni jooksul — e-posti teel või telefoni teel, sõltuvalt sellest, millised kontaktandmed te vormis jätsite. Kui soovite midagi täpsustada, helistage: <strong>+372 5646 1210</strong>.`,
    ru: `Здравствуйте${nameSuffix}!<br><br>Спасибо за обращение — мы получили вашу заявку и уже взяли её в работу. Мы свяжемся с вами в течение 24 часов — по e-mail или телефону (в зависимости от того, какие данные вы указали). Если нужно что-то уточнить, звоните: <strong>+372 5646 1210</strong>.`,
    en: `Hello${nameSuffix},<br><br>Thank you for contacting us — we've received your request and will review it shortly. We'll get back to you within 24 hours via email or phone (depending on the contact details you provided). If you need to add anything, feel free to call: <strong>+372 5646 1210</strong>.`,
    fi: `Hei${nameSuffix},<br><br>Kiitos yhteydenotostasi — olemme vastaanottaneet pyyntösi ja käsittelemme sen pian. Otamme sinuun yhteyttä 24 tunnin kuluessa sähköpostitse tai puhelimitse (sen mukaan, mitä yhteystietoja annoit). Jos haluat täydentää tietoja, soita: <strong>+372 5646 1210</strong>.`
  };

  // Plain-text versions (no HTML)
  const greetingsText = {
    et: `Tere${nameSuffix},\n\nAitäh, et kirjutasite meile! Teie päring on kätte saadud ja võtame selle peagi ette. Vastame teile 24 tunni jooksul — e-posti teel või telefoni teel, sõltuvalt sellest, millised kontaktandmed te vormis jätsite. Kui soovite midagi täpsustada, helistage: +372 5646 1210.`,
    ru: `Здравствуйте${nameSuffix}!\n\nСпасибо за обращение — мы получили вашу заявку и уже взяли её в работу. Мы свяжемся с вами в течение 24 часов — по e-mail или телефону (в зависимости от того, какие данные вы указали). Если нужно что-то уточнить, звоните: +372 5646 1210.`,
    en: `Hello${nameSuffix},\n\nThank you for contacting us — we've received your request and will review it shortly. We'll get back to you within 24 hours via email or phone (depending on the contact details you provided). If you need to add anything, feel free to call: +372 5646 1210.`,
    fi: `Hei${nameSuffix},\n\nKiitos yhteydenotostasi — olemme vastaanottaneet pyyntösi ja käsittelemme sen pian. Otamme sinuun yhteyttä 24 tunnin kuluessa sähköpostitse tai puhelimitse (sen mukaan, mitä yhteystietoja annoit). Jos haluat täydentää tietoja, soita: +372 5646 1210.`
  };

  // "Request details" block labels per language
  const labels = {
    et: { details: "Teie päringu andmed", car: "Autonumber", msg: "Sõnum", phone: "Telefon" },
    ru: { details: "Детали заявки", car: "Номер авто", msg: "Сообщение", phone: "Телефон" },
    en: { details: "Request details", car: "Car plate", msg: "Message", phone: "Phone" },
    fi: { details: "Pyyntösi tiedot", car: "Autonumero", msg: "Viesti", phone: "Puhelin" }
  };

  const l = labels[lang] || labels.et;
  const greet = greetings[lang] || greetings.et;
  const greetText = greetingsText[lang] || greetingsText.et;
  const subject = subjects[lang] || subjects.et;

  // ── HTML email ──────────────────────────────────────────────────────────────
  // Fully inline CSS for maximum email client compatibility (Gmail, Outlook, Apple Mail).
  // Logo must use absolute HTTPS URL. PNG filename is uppercase as on the server.
  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 20px;">
    <tr>
      <td align="center">
        <!-- Card -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;border:1px solid #e8e8e8;box-shadow:0 4px 16px rgba(0,0,0,0.06);">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:40px 40px 28px 40px;">
              <img src="https://mrcar.ee/homepage_pics/logo_black.PNG"
                   alt="Mr.Car Autoteenindus"
                   width="180"
                   height="auto"
                   style="display:block;max-width:180px;height:auto;border:0;">
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #eeeeee;margin:0;">
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 40px 20px 40px;color:#333333;font-size:16px;line-height:1.7;">
              ${greet}
            </td>
          </tr>

          <!-- Details block -->
          <tr>
            <td style="padding:0 40px 32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                     style="background-color:#f9f9f9;border-radius:8px;border:1px solid #efefef;padding:0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:0.08em;color:#999999;">${l.details}</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:5px 0;font-size:14px;color:#666666;width:120px;vertical-align:top;">${l.car}:</td>
                        <td style="padding:5px 0;font-size:14px;color:#111111;font-weight:600;">${escHtml(carNumber)}</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;font-size:14px;color:#666666;vertical-align:top;">${l.msg}:</td>
                        <td style="padding:5px 0;font-size:14px;color:#111111;">${escHtml(message)}</td>
                      </tr>
                      ${phone ? `<tr>
                        <td style="padding:5px 0;font-size:14px;color:#666666;vertical-align:top;">${l.phone}:</td>
                        <td style="padding:5px 0;font-size:14px;color:#111111;">${escHtml(phone)}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer signature -->
          <tr>
            <td style="padding:0 40px 40px 40px;border-top:1px solid #eeeeee;padding-top:24px;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#111111;">Mr.Car Autoteenindus</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  // ── Plain-text fallback ─────────────────────────────────────────────────────
  const text = [
    greetText,
    "",
    `── ${l.details} ──`,
    `${l.car}: ${carNumber}`,
    `${l.msg}: ${message}`,
    phone ? `${l.phone}: ${phone}` : null,
    "",
    "Mr.Car Autoteenindus"
  ].filter(line => line !== null).join("\n");

  return { subject, html, text };
}

// Simple HTML escaping for user-supplied values in the email body.
function escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Lead function ────────────────────────────────────────────────────────────

exports.lead = onRequest({
  cors: true,
  region: "us-central1",
  secrets: ["SMTP_PASS"]
}, async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const {
    name,
    carNumber,
    email,
    phone,
    message,
    lang: rawLang,
    hp,
    tsStart,
    pageUrl
  } = req.body;

  // ── Anti-spam ───────────────────────────────────────────────────────────────

  if (hp) {
    console.log("Honeypot filled — silent drop");
    return res.status(200).json({ success: true });
  }

  if (Date.now() - (parseInt(tsStart) || 0) < 2000) {
    console.log("Timing check failed — silent drop");
    return res.status(200).json({ success: true });
  }

  // ── Validation ──────────────────────────────────────────────────────────────

  const requiredFields = { carNumber, email, message };
  const missingFields = Object.keys(requiredFields).filter(
    key => !requiredFields[key] || typeof requiredFields[key] !== "string" || requiredFields[key].trim() === ""
  );

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      type: "validation",
      message: "Необходимо заполнить выделенные поля",
      fields: missingFields
    });
  }

  // ── Normalise lang ──────────────────────────────────────────────────────────

  const validLangs = ["et", "ru", "en", "fi"];
  const lang = validLangs.includes(String(rawLang || "").toLowerCase())
    ? String(rawLang).toLowerCase()
    : "et";

  // ── NAME substitution ────────────────────────────────────────────────────────

  const nameSuffix = name && typeof name === "string" && name.trim()
    ? ", " + name.trim()
    : "";

  // ── SMTP transport ──────────────────────────────────────────────────────────

  const FROM = '"Mr.Car Autoteenindus" <info@mrcar.ee>';

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: "smtp.zone.eu",
      port: 465,
      secure: true,           // SSL/TLS
      auth: {
        user: "info@mrcar.ee",
        pass: process.env.SMTP_PASS
      }
    });
  } catch (err) {
    console.error("Transporter creation error:", err);
    return res.status(500).json({
      success: false,
      type: "server",
      message: "Не удалось отправить заявку. Попробуйте ещё раз."
    });
  }

  // ── Admin email (ALWAYS in Russian) ─────────────────────────────────────────

  const timestamp = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Tallinn" });

  const adminEmailOptions = {
    from: FROM,
    to: "info@mrcar.ee",
    replyTo: `${name ? escHtml(name) + " " : ""}<${email}>`,
    subject: `Новая заявка с сайта MrCar — ${carNumber}`,
    text: [
      "Новая заявка с сайта MrCar",
      "",
      `Имя:            ${name || "—"}`,
      `Госномер:       ${carNumber}`,
      `Email:          ${email}`,
      `Телефон:        ${phone || "—"}`,
      `Сообщение:      ${message}`,
      `Язык клиента:   ${lang}`,
      `URL страницы:   ${pageUrl || "—"}`,
      `Timestamp:      ${timestamp}`
    ].join("\n")
  };

  // ── Customer email (language-specific) ──────────────────────────────────────

  const { subject, html, text } = buildCustomerEmail(lang, nameSuffix, carNumber, message, phone);

  const customerEmailOptions = {
    from: FROM,
    to: email,
    subject,
    html,
    text  // multipart/alternative plain-text fallback
  };

  // ── Send both ────────────────────────────────────────────────────────────────

  try {
    await Promise.all([
      transporter.sendMail(adminEmailOptions),
      transporter.sendMail(customerEmailOptions)
    ]);

    return res.status(200).json({
      success: true,
      message: "Спасибо! Заявка отправлена."
    });

  } catch (error) {
    console.error("SMTP send error:", error);
    return res.status(500).json({
      success: false,
      type: "server",
      message: "Не удалось отправить заявку. Попробуйте ещё раз."
    });
  }
});