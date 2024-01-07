import { Router } from 'express';
import axios from 'axios';
import filterAndLimitResults from '../helpers/filterResults.js';
import processEventData from '../helpers/processEventData.js';
import processMoviesData from '../helpers/processMoviesData.js';

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
// This is for events using the Events API:
router.get('/events', async (req, res) => {
  try {
    const { query, location = 'Montreal' } = req.query;
    // Handle case where user does not fill the query search field:
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    const apiUrl = `https://serpapi.com/search.json?engine=google_events&q=${query}&location=${location}&api_key=${process.env.API_KEY}`;
    
    const response = await axios.get(apiUrl);
    // Check if events_results exists in the response
    if (response.data.events_results) {
      // Call helper function:
      const processedEvents = processEventData(response.data.events_results);
      res.json(processedEvents);
    } else {
      res.status(404).json({ error: 'No events found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event data' });
  }
});

////////////////////////////////////////////////////////////////////////////////
// Following routes are using Movies API:
////////////////////////////////////////////////////////////////////////////////
// This for the movies near the user; the api is the Google Search API:
router.get('/movies', async (req, res) => {
  try {
    const { location = 'Montreal, Quebec, Canada' } = req.query;

    const apiUrl = `https://serpapi.com/search.json?q=movies+near+me&location=${location}&google_domain=google.ca&gl=ca&hl=en&api_key=${process.env.API_KEY}`
    
    const response = await axios.get(apiUrl);

    const moviesData = response.data.knowledge_graph.movies_playing;
  
    if (moviesData) {
      const processedMovies = processMoviesData(moviesData);
      res.json(processedMovies);
    } else {
      res.status(404).json({ error: 'No movies found near the specified location.' });
    }
  } catch (error) {
    console.error('Error fetching movies.', error);
    res.status(500).json({ error: 'Failed to fetch movies data.' });
  }
});

// This is fo the movies showtimes obtained when a movie is selected by user:
router.get('/movie-showtimes', async (req, res) => {
  try {
  const { movieName, location = 'Montreal, Quebec, Canada' } = req.query;

  const apiUrl = `https://serpapi.com/search.json?q=${movieName}+theater&location=${location}&hl=en&gl=us&api_key=${process.env.API_KEY}`;

    const response = await axios.get(apiUrl);
    res.json(response.data.showtimes || []);
  } catch (error) {
    console.error('Error fetching showtimes:', error);
    res.status(500).json({ error: 'Failed to fetch showtimes.' });
  }
});


export default router;