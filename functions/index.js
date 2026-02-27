const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");

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
      // ТУТ САМОЕ ВАЖНОЕ: функция вернет нам точную причину от Google
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