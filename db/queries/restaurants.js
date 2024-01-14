import db from '../connection.js';

// This is helper function for inserting a restaurant:
const insertRestaurant = async (dateId, restaurantData) => {
  try {
    // Insert into date_components table first (restaurants is category # 2):
    const componentQuery = `
      INSERT INTO date_components (date_id, category_id)
      VALUES ($1, 2)
      RETURNING id;`;
    const componentResult = await db.query(componentQuery, [dateId]);
    const componentId = componentResult.rows[0].id;

    // Then insert into the restaurants table:
    const restaurantQuery = `
      INSERT INTO restaurants (component_id, name, address, rating, price_level, cuisine_type, opening_hours, closing_hours, website_url, photo_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;`;
    const restaurantValues = [
      componentId,
      restaurantData.name,
      restaurantData.address,
      restaurantData.rating,
      restaurantData.price_level,
      restaurantData.cuisine_type,
      restaurantData.opening_hours || null,
      restaurantData.closing_hours || null,
      restaurantData.website_url || null,
      restaurantData.photo_url
    ];
    const insertedRestaurant = await db.query(restaurantQuery, restaurantValues);

    // Return the inserted restaurant data
    return insertedRestaurant.rows[0];
  } catch (error) {
    console.error('Error in insertRestaurant:', error.message);
    throw error;
  }
};


export { insertRestaurant };