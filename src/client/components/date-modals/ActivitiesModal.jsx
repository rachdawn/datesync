import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ActivitiesSelect from "../search-forms/ActivitiesSelect";
import closeSymbol from "/src/client/assets/closeSymbol.svg";
import ActivitiesAccordion from "../result-accordions/ActivitiesAccordion";

export default function ActivitiesModal({ coordinates }) {
  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState([]); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onActivitiesFetched = (fetchedData) => {
    setActivities(fetchedData);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Search Activities</Button>
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
              />
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
