import db from '../connection.js';

// Function to insert a new event into the database:
const insertEvent = async (eventData) => {
  const {
    category_id, component_id, title, description, start_date_time, end_date_time,
    location_name, address, event_type, price, event_url, photo_url
  } = eventData;
  
  const queryString = `
    INSERT INTO events (
      category_id, component_id, title, description, start_date_time, end_date_time,
      location_name, address, event_type, price, event_url, photo_url
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
  `;
  const queryParams = [
    category_id, component_id, title, description, start_date_time, end_date_time,
    location_name, address, event_type, price, event_url, photo_url
  ];

  try {
    await db.query(queryString, queryParams);
  } catch (err) {
    console.log('Error executing insertEvent query', err.message);
    throw err;
  }
};

export default insertEvent;
