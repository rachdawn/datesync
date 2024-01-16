import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import SelectionAlert from "../SelectionAlert";
import RestaurantAccordion from "../result-accordions/RestaurantAccordion";
import RestaurantSelect from "../search-forms/RestaurantSelect";
import closeSymbol from "/src/client/assets/closeSymbol.svg";

export default function RestaurantsModal({ coordinates, onRestaurantSelect }) {
  const [open, setOpen] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [showAlert, setShowAlert] = useState(false)

  const isDisabled = !coordinates;

  const handleClose = () => setOpen(false);

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

  // When restaurants data is fetched we can update state with the new data:
  const handleDataFetched = (data) => {
    setRestaurantsData(data); 
  };

  // This function will be called when "Add to Date" is clicked:
  const handleAddToDateClick = (restaurant) => {
    onRestaurantSelect(restaurant);
    handleClose(); 
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Search Restaurants
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
              Search Restaurants
            </Typography>
          </div>
          <RestaurantSelect 
            coordinates={coordinates} 
            onDataFetched={handleDataFetched} 
          />
          <ul>
            {restaurantsData.map((restaurant) => (
              <RestaurantAccordion
                key={restaurant.component_id}
                restaurant={restaurant}
                onAddToDate={() => handleAddToDateClick(restaurant)}
              />
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
