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
    et: `Tere${nameSuffix}, Aitäh, et kirjutasite meile! Teie päring on kätte saadud ja võtame selle peagi ette. Vastame teile 24 tunni jooksul — e-posti teel või telefoni teel, sõltuvalt sellest, millised kontaktandmed te vormis jätsite. Kui soovite midagi täpsustada, helistage: +372 5646 1210. Parimate soovidega, Mr.Car Autoetteenindus`,
    ru: `Здравствуйте${nameSuffix}! Спасибо за обращение — мы получили вашу заявку и уже взяли её в работу. Мы свяжемся с вами в течение 24 часов — по e-mail или телефону (в зависимости от того, какие данные вы указали). Если нужно что-то уточнить, звоните: +372 5646 1210. Mr.Car Autoetteenindus`,
    en: `Hello${nameSuffix}, Thank you for contacting us — we've received your request and will review it shortly. We'll get back to you within 24 hours via email or phone (depending on the contact details you provided). If you need to add anything, feel free to call: +372 5646 1210. Mr.Car Autoetteenindus`,
    fi: `Hei${nameSuffix}, Kiitos yhteydenotostasi — olemme vastaanottaneet pyyntösi ja käsittelemme sen pian. Otamme sinuun yhteyttä 24 tunnin kuluessa sähköpostitse tai puhelimitse (sen mukaan, mitä yhteystietoja annoit). Jos haluat täydentää tietoja, soita: +372 5646 1210. Parimate soovidega, Mr.Car Autoetteenindus`
  };

  const labels = {
    et: { details: "Detailid:", car: "Autonumber", message: "Sõnum", phone: "Telefon" },
    ru: { details: "Детали заявки:", car: "Номер авто", message: "Сообщение", phone: "Телефон" },
    en: { details: "Request details:", car: "Car number", message: "Message", phone: "Phone" },
    fi: { details: "Pyyntösi tiedot:", car: "Autonumero", message: "Viesti", phone: "Puhelin" }
  };

  const l = labels[lang] || labels.et;
  const greet = greetings[lang] || greetings.et;

  return {
    subject: subjects[lang] || subjects.et,
    html: `
      <div style="background-color: #f4f4f4; padding: 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://mrcar.ee/homepage_pics/logo_black.PNG" height="56" alt="MrCar">
          </div>
          <div style="color: #333333; line-height: 1.6; font-size: 16px;">
            <p>${greet}</p>
            <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
              <h4 style="margin-top: 0;">${l.details}</h4>
              <p style="margin-bottom: 8px;"><strong>${l.car}:</strong> ${carNumber}</p>
              <p style="margin-bottom: 8px;"><strong>${l.message}:</strong> ${message}</p>
              ${phone ? `<p style="margin-bottom: 0;"><strong>${l.phone}:</strong> ${phone}</p>` : ""}
            </div>
            <p style="margin-top: 30px; font-weight: bold;">
              +372 5646 1210<br>
              Mr.Car Autoetteenindus
            </p>
          </div>
        </div>
      </div>
    `
  };
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
      message: "Необходимо заполнить выделенные поля",
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

    // Email to admin
    const adminEmail = {
      from: "info@mrcar.ee",
      to: "info@mrcar.ee",
      replyTo: email,
      subject: `Заявка с сайта MrCar — ${carNumber}`,
      text: `
Новая заявка с сайта MrCar

Имя: ${name || "—"}
Госномер: ${carNumber}
Email: ${email}
Телефон: ${phone || "—"}
Сообщение: ${message}

Язык: ${lang}
URL страницы: ${pageUrl || "—"}
Timestamp: ${new Date().toISOString()}
      `
    };

    // Email to customer
    const { subject, html } = buildCustomerEmail(lang, nameSuffix, carNumber, message, phone);
    const customerEmail = {
      from: "info@mrcar.ee",
      to: email,
      subject: subject,
      html: html
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