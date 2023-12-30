const db = require('../connection');

// Following code consists of db queries:

// Function to get all products from the db:
const getAllProducts = () => {
  const queryString = `SELECT * FROM products WHERE is_sold = FALSE;`;
  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing getAllProducts query', err.message);
    });
};

const getProducts = (options, limit = 1000) => {
  const queryParams = [];

  let queryString = `
  SELECT *
  FROM products `;


  const filters = [options.id, options.category, options.min_price, options.max_price].filter(element => element !== undefined).filter(element => element);

  if (filters.length) {
    queryString += `WHERE `;
  }

  if (options.id) {
    queryParams.push(options.id);
    queryString += `id = $${queryParams.length}`
  }

  if (options.category) {
    queryParams.push(`%${options.category}%`);
    queryString += `category LIKE $${queryParams.length}`;
  }

  if (options.min_price) {
    queryParams.push(options.min_price);
    if (queryString.includes('WHERE category')) {
      queryString += `AND `;
    }
    queryString += `price >= $${queryParams.length} `;
  }

  if (options.max_price) {
    queryParams.push(options.max_price);
    if (queryString.includes('WHERE category') || queryString.includes('WHERE price')) {
      queryString += `AND `;
    }
    queryString += `price <= $${queryParams.length} `;
  }

  queryParams.push(limit);
  queryString += `
  ORDER BY id DESC
  LIMIT $${queryParams.length};
  `;

  console.log(queryString, queryParams);

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing getProducts query: ', err.message);
    });;
};

// Admin: Add new item
const addProduct = (admin_id, title, category, thumbnail_photo_url, photo_url, description, price, current_inventory) => {
  const queryString = `
  INSERT INTO products (admin_id, title, category, thumbnail_photo_url, photo_url, description, price, current_inventory, posted_at)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
  RETURNING *;
  `;

  const values = [admin_id, title, category, thumbnail_photo_url, photo_url, description, price, current_inventory]

  return db.query(queryString, values)
    .then(data => {
      // console.log('New item added:', data.rows)
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing addProduct query', err.message);
    });
};

// When users add favorite products:
const addFavorite = (userId, productId) => {
  const queryString = `
    INSERT INTO favourites (user_id, product_id, added_date)
    VALUES ($1, $2, NOW())
    RETURNING *;`;

  const values = [userId, productId];

  return db.query(queryString, values)
    .then(data => {
      console.log("Favorite added:", data.rows);
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing addFavorite query', err.message);
    });
};

// Query to get users' favorites:
const getUserFavorites = (userId) => {
  const queryString = `
    SELECT *
    FROM favourites
    JOIN products ON products.id = favourites.product_id
    WHERE favourites.user_id = $1;`;

  const values = [userId];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing addFavorite query', err.message);
    });
};

// Function to handle deletion of a favorite product:

const deleteFavorite = (userId, productId) => {
  // Store SQL query string:
  const queryString = `
    DELETE FROM favourites
    WHERE user_id = $1 AND product_id = $2
    RETURNING *;`;

  const values = [userId, productId];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing deleteFavorite query', err.message);
    });
};

// Function to handle deletion of a product:

const deleteProduct = (productId) => {
  // Store SQL query string:
  const queryString = `
    DELETE FROM products
    WHERE id = $1
    RETURNING *;`;

  const values = [productId];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing deleteProduct query', err.message);
    });
};

// Function to mark as sold:
// In this case we are setting the current inventory of product to zero:
const markProductAsSold = (productId) => {

  const queryString = `
    UPDATE products
    SET is_sold = TRUE
    WHERE id = $1
    RETURNING *;`;

  const values = [productId];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing markProductAsSold query', err.message);
    });
};

module.exports = { getAllProducts, getProducts, addProduct, addFavorite, getUserFavorites, deleteFavorite, deleteProduct, markProductAsSold };
