import express from "express";
import ViteExpress from "vite-express";
import axios from "axios";
import 'dotenv/config';

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.use(express.json());

app.get('/local', async (req, res) => {
  try {
    const query = 'Beaches'
    const location = 'Vancouver'
    const apiUrl = `https://serpapi.com/search.json?engine=google_local&q=${query}&location=${location}&google_domain=google.com&api_key=${process.env.API_KEY}`; 
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
