import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "/src/client/assets/delete-icon.svg";
import "/src/client/styles/DateComponentCards.scss";

const SelectedMovieCard = ({ movie }) => {
  // The movie object is nested within another object thus the following destructuring:
  const {
    movie: { title, image, details },
    showtime,
  } = movie;
  const { day, date, time, theater } = showtime;

  return (
    <Card className="date-card">
      <button className="delete-button">
        <img src={DeleteIcon} alt="Remove Selection" />
      </button>
      <CardMedia
        component="img"
        className="date-card-img"
        image={image}
        alt={title}
      />
      <CardContent className="card-content">
        <Typography className="date-title" variant="h5" component="div">
          {title}
        </Typography>
        <Typography className="date-type" variant="body2">
          Selected Showtime: {day}, {date} at {time}
        </Typography>
      </CardContent>
      <Accordion className="card-menu">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="card-menu-title"
        >
          Movie Details
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="date-type" variant="body2">
            {details}
          </Typography>
          <hr />
          <Typography variant="body2">{theater.name}</Typography>
          <Typography variant="body2">{theater.address}</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default SelectedMovieCard;
