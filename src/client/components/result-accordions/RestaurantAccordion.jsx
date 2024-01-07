import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RestaurantAccordion({ restaurant }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="result">
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
              <img className="result-img" src={restaurant.photo_url} alt="" />
            </div>
            <div className="info">
              <h3>{restaurant.name}</h3>
              <p>Cuisine: {restaurant.cuisine_type}</p>
              <p>Price Level: {restaurant.price_level}</p>
              <p>Rating: {restaurant.rating} Stars</p>
            </div>
            <div>
              <div className="actions">
                <button>Add to Date</button>
                <a href={restaurant.website_url} target="_blank">
                  <button>Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {restaurant.address} || Hours: {restaurant.opening_hours} -{" "}
            {restaurant.closing_hours}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
