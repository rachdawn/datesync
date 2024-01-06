import { Router } from 'express';
import axios from 'axios';
import filterAndLimitResults from '../helpers/filterResults.js';

const router = Router();

////////////////////////////////////////////////////////////////////////////////
// Following routes are using Local API:
////////////////////////////////////////////////////////////////////////////////

// This is for restaurants; the route calls the SerpApi Google Local API and filters results to be rendered by the frontend:
router.get('/restaurants', async (req, res) => {
  try {
    // Extract the query parameters from the frontend request:
    const { type, rating, price, location = 'Montreal' } = req.query;

    const apiUrl = `https://serpapi.com/search.json?engine=google_local&q=${type}&location=${location}&rating=${rating}&api_key=${process.env.API_KEY}`;
    
    const response = await axios.get(apiUrl);
    const results = filterAndLimitResults(response.data.local_results, { type, rating, price });

    res.json(results);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// This is for activities; the route calls the SerpApi Google Local API and filters results to be rendered by the frontend:
router.get('/activities', async (req, res) => {
  try {
    const { type, location = 'Montreal' } = req.query;
   
    const apiUrl = `https://serpapi.com/search.json?engine=google_local&q=${type}&location=${location}&api_key=${process.env.API_KEY}`;

    const response = await axios.get(apiUrl);
    const results = filterAndLimitResults(response.data.local_results, { type });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

////////////////////////////////////////////////////////////////////////////////
// Following routes are using Events API
////////////////////////////////////////////////////////////////////////////////






export default router;