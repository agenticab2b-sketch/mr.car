const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");

exports.getGoogleRating = onRequest({ cors: true, secrets: ["GOOGLE_MAPS_API_KEY"] }, async (req, res) => {
  // ID твоего места Mr. Car (его можно найти в Google Maps)
  const placeId = "ChIJ-твой-id-здесь"; 
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`
    );
    
    const data = response.data.result;
    res.json({
      rating: data.rating || 0,
      reviewsCount: data.user_ratings_total || 0
    });
  } catch (error) {
    console.error("Error fetching Google Maps data:", error);
    res.status(500).send("Internal Server Error");
  }
});