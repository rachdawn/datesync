import db from '../connection.js';
import { insertRestaurant } from './restaurants.js';
import { insertActivity } from './activities.js';
import { insertEvent } from './events.js';
import { insertMovie } from './movies.js';

const getDateComponents = async (id, options) => {
  let queryString = `
  SELECT d.id AS date_id,
  d.scheduled_date AS scheduled_date,
  d.is_draft,
  u.given_name AS user_name,
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
  LEFT JOIN users u ON u.id = d.owner_id
  LEFT JOIN date_components dc ON d.id = dc.date_id
  LEFT JOIN restaurants r ON dc.id = r.component_id
  LEFT JOIN activities a ON dc.id = a.component_id
  LEFT JOIN events e ON dc.id = e.component_id
  LEFT JOIN movies m ON dc.id = m.component_id
  WHERE d.owner_id = $1 `;

  if (options.upcoming) {
    queryString += `AND d.scheduled_date > CURRENT_DATE`;
  }

  if (options.drafts) {
    queryString += `AND d.is_draft IS TRUE`;
  }

  if (options.pastDates) {
    queryString += `AND d.scheduled_date < CURRENT_DATE`;
  }

  if (options.share) {
    queryString = queryString.replace(`WHERE d.owner_id = $1 `, `WHERE d.id = $1`);
  }

  queryString += `;`;
  
  const queryParams = [id];

  try {
    const data = await db.query(queryString, queryParams);
    return data.rows;
  } catch (err) {
    console.log('Error executing getDateComponents query', err.message);
  }
};

const deleteDate = async (dateId) => {
  const queryString = `
  DELETE FROM dates
  WHERE id = $1
  RETURNING *;`;

  const queryParams = [dateId];

  try {
    const data = await db.query(queryString, queryParams);
    return data.rows;
  } catch (err) {
    console.log('Error executing deleteDate query', err.message);
  }
};

// Function to insert completed date details in db:
const saveDateDetails = async (dateDetails) => {
  try {
    // Get the user ID from the email:
    const userId = dateDetails.owner_id;
    console.log("userId is", userId);

    // We insert into dates table:
    const insertDateQuery = `
      INSERT INTO dates (owner_id, scheduled_date, default_location, is_draft)
      VALUES ($1, $2, $3, $4)
      RETURNING id;`;

      const dateValues = [
        userId,
        dateDetails.scheduled_date,
        dateDetails.default_location,
        dateDetails.is_draft
      ];

      const dateResult = await db.query(insertDateQuery, dateValues);
      const dateId = dateResult.rows[0].id;
      console.log('Date saved:', dateResult.rows[0]);
      // For each component in dateDetails, we can insert into the respective table:
      for (const component of dateDetails.components) {
        switch (component.category) {
          case 'restaurant':
            await insertRestaurant(dateId, component);
            break;
          case 'event':
            await insertEvent(dateId, component);
            break;
          case 'movie':
            await insertMovie(dateId, component);
            break;
          case 'activity':
            await insertActivity(dateId, component);
            break;
        }
      }
      
  } catch (err) {
    throw err;
  }

};


export { getDateComponents, deleteDate, saveDateDetails };