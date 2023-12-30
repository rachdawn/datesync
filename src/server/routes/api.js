import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/hello', (req, res) => {
  res.send('Hello Vite + React!');
});

router.get('/local', async (req, res) => {
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

export default router;