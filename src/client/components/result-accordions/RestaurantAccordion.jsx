import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OpenInBrowser from "../../assets/open_in_browser.svg";

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
          className="expand-icon"
        >
          <div className="result-card">
            <div className="card-mobile">
              <div className="img-div">
                <img className="result-img" src={restaurant.photo_url} alt="" />
              </div>
              <div className="info">
                <h4>{restaurant.name}</h4>
                <p><strong>Cuisine:</strong>  {restaurant.cuisine_type}</p>
                <p><strong>Price Level:</strong> {restaurant.price_level}</p>
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
                <a href={restaurant.website_url} target="_blank">
                  <button>
                    <img className="open-in-browser-icon" src={OpenInBrowser} alt="" />
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
            <p><strong>Hours:</strong> {restaurant.opening_hours} -{" "}
            {restaurant.closing_hours}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

