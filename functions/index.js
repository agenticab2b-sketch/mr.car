const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");
const nodemailer = require("nodemailer");

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

exports.ping = onRequest({ cors: true }, (req, res) => {
  res.status(200).send("pong");
});

function buildCustomerEmail(lang, nameSuffix, carNumber, message, phone) {
  const subjects = {
    et: "Täname! Oleme teie päringu kätte saanud",
    ru: "Спасибо! Мы получили вашу заявку",
    en: "Thank you! We've received your request",
    fi: "Kiitos! Olemme vastaanottaneet pyyntösi"
  };

  const greetings = {
    et: `Tere${nameSuffix}, Aitäh, et kirjutasite meile! Teie päring on kätte saadud ja võtame selle peagi ette. Vastame teile 24 tunni jooksul — e-posti teel või telefoni teel, sõltuvalt sellest, millised kontaktandmed te vormis jätsite.`,
    ru: `Здравствуйте${nameSuffix}! Спасибо за обращение — мы получили вашу заявку и уже взяли её в работу. Мы свяжемся с вами в течение 24 часов — по e-mail или телефону (в зависимости от того, какие данные вы указали).`,
    en: `Hello${nameSuffix}, Thank you for contacting us — we’ve received your request and will review it shortly. We’ll get back to you within 24 hours via email or phone (depending on the contact details you provided).`,
    fi: `Hei${nameSuffix}, Kiitos yhteydenotostasi — olemme vastaanottaneet pyyntösi ja käsittelemme sen pian. Otamme sinuun yhteyttä 24 tunnin kuluessa sähköpostitse tai puhelimitse (sen mukaan, mitä yhteystietoja annoit).`
  };

  const labels = {
    et: { details: "Detailid:", car: "Autonumber", message: "Sõnum", phone: "Telefon", footer: "Kui soovite midagi täpsustada, helistage:" },
    ru: { details: "Детали заявки:", car: "Номер авто", message: "Сообщение", phone: "Телефон", footer: "Если нужно что-то уточнить, звоните:" },
    en: { details: "Request details:", car: "Car number", message: "Message", phone: "Phone", footer: "If you need to add anything, feel free to call:" },
    fi: { details: "Pyyntösi tiedot:", car: "Autonumero", message: "Viesti", phone: "Puhelin", footer: "Jos haluat täydentää tietoja, soita:" }
  };

  const l = labels[lang] || labels.et;
  const greet = greetings[lang] || greetings.et;
  const subject = subjects[lang] || subjects.et;

  const html = `
    <div style="background-color: #f8f9fa; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eeeeee;">
        <div style="text-align: center; margin-bottom: 35px;">
          <img src="https://mrcar.ee/homepage_pics/logo_black.PNG" height="56" alt="MrCar" style="display: inline-block;">
        </div>
        <div style="color: #444444; line-height: 1.6; font-size: 16px;">
          <p style="margin-top: 0; margin-bottom: 25px;">${greet}</p>
          
          <div style="margin: 30px 0; padding: 25px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #f0f0f0;">
            <h4 style="margin-top: 0; margin-bottom: 15px; color: #111111; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">${l.details}</h4>
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong style="color: #666666;">${l.car}:</strong> ${carNumber}</p>
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong style="color: #666666;">${l.message}:</strong> ${message}</p>
            ${phone ? `<p style="margin: 0; font-size: 15px;"><strong style="color: #666666;">${l.phone}:</strong> ${phone}</p>` : ""}
          </div>
          
          <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid #eeeeee;">
            <p style="margin: 0 0 5px 0; font-size: 14px; color: #888888;">${l.footer}</p>
            <p style="margin: 0; font-weight: bold; font-size: 18px; color: #111111;">+372 5646 1210</p>
            <p style="margin: 15px 0 0 0; font-weight: bold; font-size: 15px; color: #111111;">Mr.Car Autoteenindus</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const text = `${greet}\n\n${l.details}\n${l.car}: ${carNumber}\n${l.message}: ${message}\n${phone ? `${l.phone}: ${phone}\n` : ""}\n${l.footer} +372 5646 1210\nMr.Car Autoteenindus`;

  return { subject, html, text };
}

exports.lead = onRequest({
  cors: true,
  region: "us-central1",
  secrets: ["SMTP_PASS"]
}, async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, carNumber, email, phone, message, lang: rawLang, hp, tsStart, pageUrl } = req.body;

  // Anti-spam
  if (hp) {
    console.log("Honeypot filled, silent drop");
    return res.status(200).json({ success: true });
  }
  if (Date.now() - (parseInt(tsStart) || 0) < 2000) {
    console.log("Timing too fast, silent drop");
    return res.status(200).json({ success: true });
  }

  // Server validation
  const requiredFields = { carNumber, email, message };
  const missingFields = Object.keys(requiredFields).filter(key => !requiredFields[key] || typeof requiredFields[key] !== "string" || requiredFields[key].trim() === "");

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      type: "validation",
      message: "Необходимо заполнитель выделенные поля",
      fields: missingFields
    });
  }

  // Determine lang
  const validLangs = ["et", "ru", "en", "fi"];
  const lang = validLangs.includes(String(rawLang).toLowerCase()) ? String(rawLang).toLowerCase() : "et";

  // Build NAME substitution
  const nameSuffix = name && typeof name === "string" && name.trim() ? ", " + name.trim() : "";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zone.eu",
      port: 465,
      secure: true,
      auth: { user: "info@mrcar.ee", pass: process.env.SMTP_PASS }
    });

    // Email to admin (ALWAYS in Russian)
    const adminEmail = {
      from: "info@mrcar.ee",
      to: "info@mrcar.ee",
      replyTo: email,
      envelope: {
        from: "info@mrcar.ee",
        to: "info@mrcar.ee"
      },
      subject: `Заявка с сайта MrCar — ${carNumber}`,
      text: `Новая заявка с сайта MrCar

Имя: ${name || "—"}
Госномер: ${carNumber}
Email: ${email}
Телефон: ${phone || "—"}
Сообщение: ${message}
Язык клиента: ${lang}
URL страницы: ${pageUrl || "—"}
Timestamp: ${new Date().toISOString()}`
    };

    // Email to customer
    const { subject, html, text } = buildCustomerEmail(lang, nameSuffix, carNumber, message, phone);
    const customerEmail = {
      from: "info@mrcar.ee",
      to: email,
      envelope: {
        from: "info@mrcar.ee",
        to: email
      },
      subject: subject,
      html: html,
      text: text
    };

    await Promise.all([
      transporter.sendMail(adminEmail),
      transporter.sendMail(customerEmail)
    ]);

    return res.status(200).json({
      success: true,
      message: "Спасибо! Заявка отправлена."
    });

  } catch (error) {
    console.error("SMTP Error:", error);
    return res.status(500).json({
      success: false,
      type: "server",
      message: "Не удалось отправить заявку. Попробуйте ещё раз."
    });
  }
});