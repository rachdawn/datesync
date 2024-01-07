import React, { useState } from 'react';
import axios from 'axios';
import MoviesNearMe from './MoviesNearMe';
import { Container, Button } from 'react-bootstrap';

const TestMoviesApi = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/movies');
      setMovies(response.data);
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <Container>
      <h1 className="text-center mt-4 mb-4">Test Movies API</h1>
      <Button onClick={fetchMovies} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Movies Near Me'}
      </Button>
      {error && <p className="text-danger">{error}</p>}
      <MoviesNearMe movies={movies} />
    </Container>
  );
};

export default TestMoviesApi;
