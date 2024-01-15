import db from '../connection.js';

const insertEvent = async (dateId, eventData) => {
  try {
    // Insert into date_components table (events is category # 3):
    const componentQuery = `
      INSERT INTO date_components (date_id, category_id)
      VALUES ($1, 3)
      RETURNING id;`;
    const componentResult = await db.query(componentQuery, [dateId]);
    const componentId = componentResult.rows[0].id;

    // Then insert into the events table:
    const eventQuery = `
      INSERT INTO events (component_id, title, description, start_date_time, end_date_time, location_name, address, event_type, price, event_url, photo_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;`;
    const eventValues = [
      componentId,
      eventData.title,
      eventData.description,
      eventData.start_date_time || null,
      eventData.end_date_time || null,
      eventData.location_name,
      eventData.address,
      eventData.event_type,
      eventData.price || null,
      eventData.event_url || null,
      eventData.photo_url
    ];
    const insertedEvent = await db.query(eventQuery, eventValues);

    return insertedEvent.rows[0];
  } catch (error) {
    console.error('Error in insertEvent:', error.message);
    throw error;
  }
};

export { insertEvent };
