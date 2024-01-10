import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesNearMe from '../MoviesNearMe';
import closeSymbol from "/src/client/assets/closeSymbol.svg";
import LottieSpinner from "../LottieSpinner";
import useLoading from "../hooks/useLoading";
import Typography from "@mui/material/Typography";

export default function MoviesModal() {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, startLoading, stopLoading] = useLoading();
  
  useEffect(() => {
    if (open) {
      fetchMovies();
    }
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchMovies = async () => {
    startLoading();
    try {
      const response = await axios.get('/api/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    stopLoading();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Search Movies</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="search-modal">
          {isLoading ? (
            <LottieSpinner />
          ) : (
            <>
              <div className="modal-top">
                <button className="close-button" onClick={handleClose}>
                  <img src={closeSymbol} alt="close symbol" />
                </button>
                <Typography
                  className="modal-title"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Search Movies
                </Typography>
              </div>
              <MoviesNearMe movies={movies} />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
