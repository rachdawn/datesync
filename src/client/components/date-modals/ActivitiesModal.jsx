import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import SelectionAlert from "../SelectionAlert";
import ActivitiesAccordion from "../result-accordions/ActivitiesAccordion";
import ActivitiesSelect from "../search-forms/ActivitiesSelect";
import closeSymbol from "/src/client/assets/closeSymbol.svg";

export default function ActivitiesModal({ coordinates, onActivitySelect }) {
  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState([]); 
  const [showAlert, setShowAlert] = useState(false)

  const isDisabled = !coordinates;
  const handleClose = () => setOpen(false);

  const onActivitiesFetched = (fetchedData) => {
    setActivities(fetchedData);
  };

  // This function will be called when "Add to Date" is clicked:
  const handleAddToDateClick = (activity) => {
    onActivitySelect(activity);
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

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Search Activities
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
              Search Activities
            </Typography>
          </div>
          <ActivitiesSelect onActivitiesFetched={onActivitiesFetched} coordinates={coordinates}/>
          <ul>
            {activities.map((activity) => (
              <ActivitiesAccordion
                key={activity.id}
                activity={activity}
                onAddToDate={() => handleAddToDateClick(activity)}
              />
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
