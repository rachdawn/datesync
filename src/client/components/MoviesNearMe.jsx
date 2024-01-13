import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import LottieSpinner from "./LottieSpinner";
import Showtimes from "./Showtimes";
import useLoading from "./hooks/useLoading.js";

const MoviesNearMe = ({ movies, cityString, onShowtimeSelect }) => {
  const [showtimes, setShowtimes] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showShowtimes, setShowShowtimes] = useState(false);
  const [isLoading, startLoading, stopLoading] = useLoading();


  // This is an asynchronous function triggered when a user slects to view showtimes for a movie. It makes a request to get showtimes and updates the states involved:
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
              <Grid item className="movie-grid-item" key={index} xs={12} sm={6} md={4}>
                <Card className="movie-card"> 
                  <Typography component="div" className="movie-title">
                    <h4>{movie.title}</h4>
                  </Typography>
                  <CardMedia
                    component="img"
                    height="140"
                    image={movie.image}
                    alt={movie.title}
                    className="movie-img"
                  />
                  <CardContent className="movie-details">
                    <Typography variant="body2">
                      {movie.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="showtimes-button" size="small" onClick={() => handleShowtimes(movie)}>
                      Showtimes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
      ) : isLoading ? (
        <LottieSpinner />
      ) : (
        isLoading ? (
          <LottieSpinner />
        ) : (
          <Showtimes
            showtimes={showtimes}
            selectedMovie={selectedMovie}
            handleBackToMovies={handleBackToMovies}
            onShowtimeSelect={onShowtimeSelect}
          />
        )
      )}
    </>
  );
};

export default MoviesNearMe;
