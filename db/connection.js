// Import the entire pg module
import pg from 'pg';
// Import the fs module
import fs from 'fs';
// Import the dotenv module
import "dotenv/config";
// Destructure Pool from the imported module
const { Pool } = pg;

// Specify the path to the SSL certificate:
const sslCertPath = "./aws_rds_ssl_certificate/ca-central-1-bundle.pem"

// PG database client/connection setup
const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(sslCertPath).toString()
  }
};

const db = new Pool(dbParams);

// Connect to the database
db.connect();

// Export the db object
export default db;

