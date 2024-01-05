import db from '../connection.js';

const getDateComponents = async () => {
  const queryString = `SELECT d.id AS date_id,
       r.name AS restaurant_name,
       r.address AS restaurant_address,
       r.photo_url AS restaurant_photo_url,
       r.website_url AS restaurant_website_url,
       a.activity_type,
       a.location_name AS activity_location,
       a.address AS activity_address,
       a.photo_url AS activity_photo_url,
       e.title AS event_title,
       e.description AS event_description,
       e.event_url AS event_url,
       e.photo_url AS event_photo_url,
       m.movie_title,
       m.movie_theatre,
       m.photo_url AS movie_photo_url,
       m.address AS movie_address
FROM dates d
LEFT JOIN date_components dc ON d.id = dc.date_id
LEFT JOIN restaurants r ON dc.id = r.component_id
LEFT JOIN activities a ON dc.id = a.component_id
LEFT JOIN events e ON dc.id = e.component_id
LEFT JOIN movies m ON dc.id = m.component_id
WHERE d.owner_id = 1`;

  try {
    const data = await db.query(queryString);
    return data.rows;
  } catch (err) {
    console.log('Error executing getDates query', err.message);
  }
}

export default getDateComponents;