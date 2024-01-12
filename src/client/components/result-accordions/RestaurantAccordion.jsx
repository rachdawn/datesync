import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OpenInBrowser from "../../assets/open_in_browser.svg";

export default function RestaurantAccordion({ restaurant }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Format operating hours of the restaurants:
  const formatOperatingHours = (operatingHours) => {
    return Object.entries(operatingHours).map(([day, hours]) => `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`).join(', ');
  };

  return (
    <div className="result">
      <Accordion
        expanded={expanded === restaurant.place_id} 
        onChange={handleChange(restaurant.place_id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${restaurant.place_id}-content`}
          id={`panel-${restaurant.place_id}-header`}
          className="expand-icon"
        >
          <div className="result-card">
            <div className="card-mobile">
              <div className="img-div">
                <img className="result-img" src={restaurant.thumbnail} alt={restaurant.title} />
              </div>
              <div className="info">
                <h4>{restaurant.title}</h4>
                <p><strong>Cuisine:</strong>  {restaurant.type}</p>
                <p><strong>Price Level:</strong> {restaurant.price}</p>
                <div>
                  <Rating
                    name="half-rating"
                    value={restaurant.rating}
                    precision={0.1}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="actions">
                <button>
                  <AddCircleOutlineIcon className="add-to-date-icon"/>
                  Add to Date
                </button>
                <a href={restaurant.website} target="_blank">
                  <button>
                    <img className="open-in-browser-icon" src={OpenInBrowser} alt="Visit Website" />
                    Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="details">
            <hr/>
          <Typography>
            <p><strong>Address:</strong> {restaurant.address}</p>
            <p><strong>Hours:</strong> {formatOperatingHours(restaurant.operating_hours)}</p> 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

