import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import LottieSpinner from './LottieSpinner';
import Showtimes from './Showtimes';
import useLoading from './hooks/useLoading.js';

const MoviesNearMe = ({ movies, cityString }) => {
  const [showtimes, setShowtimes] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showShowtimes, setShowShowtimes] = useState(false);
  const [isLoading, startLoading, stopLoading] = useLoading();

  const handleShowtimes = async (movie) => {
    try {
      startLoading();
      const response = await axios.get(`/api/movie-showtimes`, { 
        params: { 
          movieName: movie.title,
          cityString
        } 
      });
      setShowtimes(response.data);
      setSelectedMovie(movie);
      setShowShowtimes(true);
      stopLoading();
    } catch (error) {
      console.error('Error fetching showtimes:', error);
    } finally {
      stopLoading();
    }
  };

  const handleBackToMovies = () => {
    // Goes back to the movies list:
    setShowShowtimes(false); 
  };

  return (
    <>
      {!showShowtimes ? (
        isLoading ? (
          <LottieSpinner />
        ) : (
          <Grid container spacing={2}>
            {movies.map((movie, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={movie.image}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleShowtimes(movie)}>
                      Showtimes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
      ) : (
        isLoading ? (
          <LottieSpinner />
        ) : (
          <Showtimes
            showtimes={showtimes}
            selectedMovie={selectedMovie}
            handleBackToMovies={handleBackToMovies}
          />
        )
      )}
    </>
  );
};

export default MoviesNearMe;