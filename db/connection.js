// Import the entire pg module
import pg from 'pg';
// Destructure Pool from the imported module
const { Pool } = pg;

// PG database client/connection setup
const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

// Connect to the database
db.connect();

// Export the db object
export default db;

