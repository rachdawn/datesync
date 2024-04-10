// Import the entire pg module
import pg from 'pg';
// Destructure Pool from the imported module
const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// PG database client/connection setup
// const dbParams = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   ssl: {
//     rejectUnauthorized: true,
//     ca: fs.readFileSync(sslCertPath).toString()
//   }
// };

// const db = new Pool(dbParams);

// Connect to the database
// db.connect();

// Export the db object
export default db;

