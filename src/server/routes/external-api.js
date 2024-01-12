import { Router } from 'express';
import axios from 'axios';
import filterAndLimitResults from '../helpers/filterResults.js';
import processEventData from '../helpers/processEventData.js';
import processMoviesData from '../helpers/processMoviesData.js';

const router = Router();

////////////////////////////////////////////////////////////////////////////////
// Following routes are using Maps Local API:
////////////////////////////////////////////////////////////////////////////////

// This is for restaurants; the route calls the SerpApi Google Maps Local API and filters results to be rendered by the frontend:
router.get('/restaurants', async (req, res) => {
  const { type, price, rating, latitude, longitude } = req.query;

  // As per the documentation on SerpApi, we have to use 'q' for the query and 'll' for latitude and longitude:
  const queryParams = new URLSearchParams({
    engine: "google_maps",
    type: "search",
    // type would be something like 'Italian restaurant':
    q: type, 
    ll: `@${latitude},${longitude},15z`,
    google_domain: "google.com",
    hl: "en",
    api_key: process.env.API_KEY
  });

  const apiUrl = `https://serpapi.com/search.json?${queryParams}`;

  try {
    const response = await axios.get(apiUrl);
    const results = filterAndLimitResults(response.data.local_results, { type, rating, price })
    res.json(results);
  } catch (error) {
    console.error("Error in /restaurants route: ", error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// This is for activities; the route calls the SerpApi Google Local Maps API and filters results to be rendered by the frontend:
router.get('/activities', async (req, res) => {
  try {
    const { type, latitude, longitude } = req.query;

    const queryParams = new URLSearchParams({
      engine: "google_maps",
      type: "search",
      q: type, 
      ll: `@${latitude},${longitude},15z`,
      google_domain: "google.com",
      hl: "en",
      api_key: process.env.API_KEY
    });
   
    const apiUrl = `https://serpapi.com/search.json?${queryParams}`;

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
    // Extract query params from the frontend; cityString is the location string of the selected city from the user:
    const { query, cityString } = req.query;
    // Handle case where user does not fill the query search field:
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    const apiUrl = `https://serpapi.com/search.json?engine=google_events&q=${query}&location=${cityString}&api_key=${process.env.API_KEY}`;
    
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
    const { cityString } = req.query;

    const apiUrl = `https://serpapi.com/search.json?q=movies+near+me&location=${cityString}&google_domain=google.ca&gl=ca&hl=en&api_key=${process.env.API_KEY}`
    
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

// This is for the movies showtimes obtained when a movie is selected by user:
router.get('/movie-showtimes', async (req, res) => {
  try {
  const { movieName, cityString } = req.query;

  const apiUrl = `https://serpapi.com/search.json?q=${movieName}+theater&location=${cityString}&hl=en&gl=us&api_key=${process.env.API_KEY}`;

    const response = await axios.get(apiUrl);
    res.json(response.data.showtimes || []);
  } catch (error) {
    console.error('Error fetching showtimes:', error);
    res.status(500).json({ error: 'Failed to fetch showtimes.' });
  }
});


export default router;