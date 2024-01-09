import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';
import morgan from 'morgan';
import externalApiRoutes from "./routes/external-api.js";
import dbQueriesApiRoutes from "./routes/db-query-api.js"

const app = express();

const PORT = (process.env.PORT);

app.use(express.json());

// Use of Morgan for logging incoming requests
app.use(morgan('dev'));

app.use('/api', externalApiRoutes, dbQueriesApiRoutes);

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`),
);
