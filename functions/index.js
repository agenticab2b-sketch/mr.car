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

// ─── Robots.txt (Anti-indexing technical domains) ───────────────────────────

exports.robots = onRequest({ cors: true }, (req, res) => {
  const host = req.headers.host || "";
  if (host.includes("web.app") || host.includes("firebaseapp.com")) {
    res.type("text/plain").send("User-agent: *\nDisallow: /");
  } else {
    res.type("text/plain").send("User-agent: *\nDisallow:\nSitemap: https://www.mrcar.ee/sitemap.xml");
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Customer auto-reply email builder ───────────────────────────────────────
//
// New format (approved by client):
//
//   Tere, {name}!   ← no name → just "Tere!"
//
//   Aitäh, et kirjutasite meile. Teie päring jõudis kenasti kohale
//   ning võtame selle peagi ette.
//
//   [Details block: Autonumber / Sõnum / e-mail / Telefon]
//
//   Anname endast märku hiljemalt 24 tunni jooksul ...
//
//   Kui soovite midagi täpsustada ...
//
//   +372 5646 1210
//
//   Heade soovidega
//   Mr.Car Autoteenindus

function buildCustomerEmail(lang, name, carNumber, email, phone, message) {

  // Subjects — language-specific
  const subjects = {
    et: "Täname! Oleme teie päringu kätte saanud",
    ru: "Спасибо! Мы получили вашу заявку",
    en: "Thank you! We've received your request",
    fi: "Kiitos! Olemme vastaanottaneet pyyntösi"
  };

  // Greeting: "Tere, Name!" or just "Tere!" if no name
  const nameGreeting = name && name.trim() ? `, ${name.trim()}` : "";

  // Full localised templates — new layout
  const templates = {
    et: {
      greeting: `Tere${nameGreeting}!`,
      para1: `Aitäh, et kirjutasite meile. Teie päring jõudis kenasti kohale ning võtame selle peagi ette.`,
      labels: { car: "Autonumber", msg: "Sõnum", email: "E-mail", phone: "Telefon" },
      para2: `Anname endast märku hiljemalt 24 tunni jooksul — kas e-posti või telefoni teel, sõltuvalt sellest, millised kontaktid te vormis jagasite.`,
      callLabel: `Kui soovite midagi täpsustada või infot juurde anda, võite alati julgelt helistada:`,
      closing: `Heade soovidega`
    },
    ru: {
      greeting: `Здравствуйте${nameGreeting}!`,
      para1: `Спасибо, что написали нам. Ваша заявка успешно получена, и мы уже берём её в работу.`,
      labels: { car: "Госномер", msg: "Сообщение", email: "E-mail", phone: "Телефон" },
      para2: `Мы свяжемся с вами в течение 24 часов — по e-mail или телефону, в зависимости от того, какие контакты вы указали.`,
      callLabel: `Если хотите что-то уточнить или добавить, звоните:`,
      closing: `С уважением`
    },
    en: {
      greeting: `Hello${nameGreeting}!`,
      para1: `Thank you for reaching out. Your request has been received and we'll be taking a look at it shortly.`,
      labels: { car: "Car plate", msg: "Message", email: "E-mail", phone: "Phone" },
      para2: `We'll get back to you within 24 hours — via email or phone, depending on the contact details you provided.`,
      callLabel: `If you'd like to add anything or have questions, feel free to call:`,
      closing: `Kind regards`
    },
    fi: {
      greeting: `Hei${nameGreeting}!`,
      para1: `Kiitos yhteydenotostasi. Pyyntösi on vastaanotettu ja käsittelemme sen pian.`,
      labels: { car: "Autonumero", msg: "Viesti", email: "Sähköposti", phone: "Puhelin" },
      para2: `Otamme sinuun yhteyttä 24 tunnin kuluessa — sähköpostitse tai puhelimitse, sen mukaan mitä yhteystietoja annoit.`,
      callLabel: `Jos haluat täydentää tietoja tai sinulla on kysyttävää, soita meille:`,
      closing: `Ystävällisin terveisin`
    }
  };

  const t = templates[lang] || templates.et;
  const lbl = t.labels;
  const subject = subjects[lang] || subjects.et;

  // ── HTML ──────────────────────────────────────────────────────────────────
  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${escHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 16px;">
    <tr>
      <td align="center">
        <!-- Card -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;border:1px solid #e8e8e8;box-shadow:0 4px 16px rgba(0,0,0,0.06);">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:36px 40px 28px 40px;">
              <img src="https://mrcar-473416.web.app/homepage_pics/logo_black.PNG"
                   alt="Mr.Car Autoteenindus"
                   width="180" height="auto"
                   style="display:block;max-width:180px;height:auto;border:0;line-height:1;">
            </td>
          </tr>

          <!-- Top divider -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="border-top:1px solid #eeeeee;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 40px 8px 40px;font-size:20px;font-weight:700;color:#111111;line-height:1.3;">
              ${escHtml(t.greeting)}
            </td>
          </tr>

          <!-- Para 1 -->
          <tr>
            <td style="padding:14px 40px 0 40px;font-size:15px;color:#444444;line-height:1.7;">
              ${escHtml(t.para1)}
            </td>
          </tr>

          <!-- Details block -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                     style="background-color:#f8f8f8;border-radius:8px;border:1px solid #efefef;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="4">
                      <tr>
                        <td style="font-size:14px;color:#888888;white-space:nowrap;padding:5px 16px 5px 0;vertical-align:top;width:110px;">${escHtml(lbl.car)}:</td>
                        <td style="font-size:14px;color:#111111;font-weight:600;padding:5px 0;vertical-align:top;">${escHtml(carNumber)}</td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#888888;padding:5px 16px 5px 0;vertical-align:top;">${escHtml(lbl.msg)}:</td>
                        <td style="font-size:14px;color:#111111;padding:5px 0;vertical-align:top;">${escHtml(message)}</td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#888888;padding:5px 16px 5px 0;vertical-align:top;">${escHtml(lbl.email)}:</td>
                        <td style="font-size:14px;color:#111111;padding:5px 0;vertical-align:top;">${escHtml(email)}</td>
                      </tr>
                      ${phone ? `<tr>
                        <td style="font-size:14px;color:#888888;padding:5px 16px 5px 0;vertical-align:top;">${escHtml(lbl.phone)}:</td>
                        <td style="font-size:14px;color:#111111;padding:5px 0;vertical-align:top;">${escHtml(phone)}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Para 2 -->
          <tr>
            <td style="padding:24px 40px 0 40px;font-size:15px;color:#444444;line-height:1.7;">
              ${escHtml(t.para2)}
            </td>
          </tr>

          <!-- Call label -->
          <tr>
            <td style="padding:20px 40px 4px 40px;font-size:15px;color:#444444;line-height:1.7;">
              ${escHtml(t.callLabel)}
            </td>
          </tr>

          <!-- Phone number (prominent) -->
          <tr>
            <td style="padding:0 40px 28px 40px;font-size:22px;font-weight:700;color:#111111;letter-spacing:-0.01em;">
              +372 5646 1210
            </td>
          </tr>

          <!-- Footer signature -->
          <tr>
            <td style="padding:24px 40px 36px 40px;border-top:1px solid #eeeeee;">
              <p style="margin:0 0 2px 0;font-size:14px;color:#888888;">${escHtml(t.closing)}</p>
              <p style="margin:0;font-size:15px;font-weight:700;color:#111111;">Mr.Car Autoteenindus</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  // ── Plain-text fallback ───────────────────────────────────────────────────
  const text = [
    t.greeting,
    "",
    t.para1,
    "",
    `${lbl.car}: ${carNumber}`,
    `${lbl.msg}: ${message}`,
    `${lbl.email}: ${email}`,
    phone ? `${lbl.phone}: ${phone}` : null,
    "",
    t.para2,
    "",
    t.callLabel,
    "+372 5646 1210",
    "",
    t.closing,
    "Mr.Car Autoteenindus"
  ].filter(line => line !== null).join("\n");

  return { subject, html, text };
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

  // ── Anti-spam ─────────────────────────────────────────────────────────────

  if (hp) {
    console.log("Honeypot filled — silent drop");
    return res.status(200).json({ success: true });
  }

  if (Date.now() - (parseInt(tsStart) || 0) < 2000) {
    console.log("Timing check failed — silent drop");
    return res.status(200).json({ success: true });
  }

  // ── Validation ────────────────────────────────────────────────────────────

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

  // ── Normalise lang ────────────────────────────────────────────────────────

  const validLangs = ["et", "ru", "en", "fi"];
  const lang = validLangs.includes(String(rawLang || "").toLowerCase())
    ? String(rawLang).toLowerCase()
    : "et";

  // ── SMTP transport ────────────────────────────────────────────────────────

  const FROM = '"Mr.Car Autoteenindus" <info@mrcar.ee>';

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: "smtp.zone.eu",
      port: 465,
      secure: true,
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

  // ── Admin email — ALWAYS in Estonian ─────────────────────────────────────

  const timestamp = new Date().toLocaleString("et-EE", { timeZone: "Europe/Tallinn" });

  const adminEmailOptions = {
    from: FROM,
    to: "info@mrcar.ee",
    replyTo: name ? `${name} <${email}>` : email,
    subject: `Uus päring MrCar veebilehelt — ${carNumber}`,
    text: [
      "Uus päring MrCar veebilehelt",
      "",
      `Nimi:          ${name || "—"}`,
      `Autonumber:    ${carNumber}`,
      `Email:         ${email}`,
      `Telefon:       ${phone || "—"}`,
      `Sõnum:         ${message}`,
      `Kliendi keel:  ${lang}`,
      `Lehe URL:      ${pageUrl || "—"}`,
      `Aeg:           ${timestamp}`
    ].join("\n")
  };

  // ── Customer auto-reply ───────────────────────────────────────────────────

  const { subject, html, text } = buildCustomerEmail(
    lang,
    name || "",
    carNumber,
    email,
    phone || "",
    message
  );

  const customerEmailOptions = {
    from: FROM,
    to: email,
    subject,
    html,
    text
  };

  // ── Send ──────────────────────────────────────────────────────────────────

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
