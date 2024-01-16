import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LottieSpinner from "../LottieSpinner";
import MoviesNearMe from '../MoviesNearMe';
import SelectionAlert from "../SelectionAlert";
import useLoading from "../hooks/useLoading";
import closeSymbol from "/src/client/assets/closeSymbol.svg";

export default function MoviesModal({ cityString, onMovieSelection }) {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, startLoading, stopLoading] = useLoading();
  const [showAlert, setShowAlert] = useState(false)

  const isDisabled = !cityString;

  useEffect(() => {
    if (open) {
      fetchMovies();
    }
  }, [open]);

  const handleClose = () => setOpen(false);

  const handleShowtimeSelect = (selectedShowtime) => {
    onMovieSelection(selectedShowtime); 
    handleClose(); 
  };

  const handleButtonClick = (event) => {
    if(isDisabled) {
      setShowAlert(true);
    } else {
      setOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const fetchMovies = async () => {
    if (!cityString) {
      console.warn("City location is not defined.");
      return;
    }

    startLoading();
    try {
      const response = await axios.get('/api/movies', {
        params: { cityString }
      });
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
    stopLoading();
    }
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Search Movies
      </Button>
      {showAlert && (
      <SelectionAlert 
        onClose={handleCloseAlert} 
        message="Please select a city first."
      />
      )}
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
              <MoviesNearMe 
              movies={movies} 
              cityString={cityString} 
              onShowtimeSelect={handleShowtimeSelect}
              />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
