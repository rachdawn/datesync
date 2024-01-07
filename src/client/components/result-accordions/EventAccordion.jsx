import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function EventAccordion({ eventData }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="results">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="result-card">
            <div>
              <img className="result-img" src={eventData.photo_url} alt="" />
            </div>
            <div className="info">
              <h3>{eventData.title}</h3>
              <p>{eventData.description}</p>
            </div>
            <div>
              <div className="actions">
                <button>Add to Date</button>
                <a href={eventData.event_url} target="_blank">
                  <button>Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {eventData.location_name} {eventData.address} || Price: $
            {eventData.price}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
