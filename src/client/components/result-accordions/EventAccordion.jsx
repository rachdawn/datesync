import React, { useState } from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OpenInBrowser from "../../assets/open_in_browser.svg";

export default function EventAccordion({ eventData, onAddToDate }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="result">
      <Accordion
        expanded={expanded === eventData.id}
        onChange={handleChange(eventData.id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${eventData.id}-content`}
          id={`${eventData.id}-header`}
        >
          <div className="result-card">
            <div>
              <img className="result-img" src={eventData.thumbnail} alt={eventData.title} />
            </div>
            <div className="info">
              <h3>{eventData.title}</h3>
              <p>{eventData.description}</p>
            </div>
            <div>
              <div className="actions">
              <button onClick={() => onAddToDate(eventData)}>
              <AddCircleOutlineIcon className="add-to-date-icon"/>
                Add to Date
              </button>
                <a href={eventData.link} target="_blank">
                  <button>
                    <img className="open-in-browser-icon" src={OpenInBrowser} alt="Visit Website" />
                    Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {eventData.venue} {eventData.address}
            {eventData.price}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
