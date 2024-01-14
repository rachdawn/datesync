import db from '../connection.js';

const insertMovie = async (dateId, movieData) => {
  try {
    // Insert into date_components table (movies is category # 1):
    const componentQuery = `
      INSERT INTO date_components (date_id, category_id)
      VALUES ($1, 1)
      RETURNING id;`;
    const componentResult = await db.query(componentQuery, [dateId]);
    const componentId = componentResult.rows[0].id;

    // Insert into movies table:
    const movieQuery = ` 
      INSERT INTO movies (component_id, movie_title, start_time, duration, movie_theatre, synopsis, photo_url, address, movie_url) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING *;`;
    const movieValues = [
      componentId, 
      movieData.movie_title, 
      movieData.start_time, 
      movieData.duration || null, 
      movieData.movie_theatre, 
      movieData.synopsis, 
      movieData.photo_url, 
      movieData.address,
      movieData.movie_url || null
    ];
    const insertedMovie = await db.query(movieQuery, movieValues);

    return insertedMovie.rows[0];
  } catch (error) {
    console.error('Error in insertMovie:', error.message);
    throw error;
  }
};

export { insertMovie };