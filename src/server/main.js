import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';
import externalApiRoutes from "./routes/external-api.js";

const app = express();

app.use(express.json());

app.use('/api', externalApiRoutes);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
