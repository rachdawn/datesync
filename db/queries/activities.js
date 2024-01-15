import db from '../connection.js';

const insertActivity = async (dateId, activityData) => {
  try {
    // Insert into date_components table (activities is category # 4):
    const componentQuery = `
      INSERT INTO date_components (date_id, category_id)
      VALUES ($1, 4)
      RETURNING id;`;
    const componentResult = await db.query(componentQuery, [dateId]);
    const componentId = componentResult.rows[0].id;

    // Then insert into the activities table:
    const activityQuery = `
      INSERT INTO activities (component_id, activity_type, location_name, address, description, photo_url, activity_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;`;
    const activityValues = [
      componentId,
      activityData.activity_type || null,
      activityData.location_name,
      activityData.address,
      activityData.description,
      activityData.photo_url,
      activityData.activity_url || null
    ];
    const insertedActivity = await db.query(activityQuery, activityValues);

    return insertedActivity.rows[0];
  } catch (error) {
    console.error('Error in insertActivity:', error.message);
    throw error;
  }
};

export { insertActivity };