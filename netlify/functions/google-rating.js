/**
 * Netlify Function: google-rating
 * Proxies requests to Google Places API to avoid exposing API key on frontend.
 */

exports.handler = async (event, context) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Fallback values in case of missing config or API failure
  const fallbackData = {
    rating: 5.0,
    user_ratings_total: 48,
    is_fallback: true
  };

  if (!apiKey || !placeId) {
    console.warn('Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID in environment.');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fallbackData),
    };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google API Error:', data.status, data.error_message);
      return {
        statusCode: 200, // Returning 200 with fallback to avoid frontend errors
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fallbackData),
      };
    }

    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      },
      body: JSON.stringify({
        rating: data.result.rating,
        user_ratings_total: data.result.user_ratings_total,
        is_fallback: false
      }),
    };
  } catch (error) {
    console.error('Fetch Error:', error);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fallbackData),
    };
  }
};
