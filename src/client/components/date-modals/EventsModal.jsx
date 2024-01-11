import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EventsSelect from "../search-forms/EventsSelect";
import closeSymbol from "/src/client/assets/closeSymbol.svg";
import EventAccordion from "../result-accordions/EventAccordion";

export default function EventsModal({ cityString }) {
  const [open, setOpen] = useState(false);
  const [eventsData, setEventsData] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onEventsFetched = (fetchedData) => {
    setEventsData(fetchedData);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Search Events</Button>
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
              Search Events
            </Typography>
          </div>
          <EventsSelect onEventsFetched={onEventsFetched} cityString={cityString}/>
          <ul>
            {eventsData.map((event) => (
              <EventAccordion
                key={event.id}
                eventData={event}
              />
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
