import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "/src/client/assets/delete-icon.svg";
import "/src/client/styles/DateComponentCards.scss";

const SelectedEventCard = ({ eventData, onDelete }) => {
  return (
    <Card className="date-card">
      <button className="delete-button" onClick={onDelete}>
        <img src={DeleteIcon} alt="Remove Selection" />
      </button>
      <CardMedia
        component="img"
        className="date-card-img"
        image={eventData.thumbnail}
        alt={eventData.title}
      />
      <CardContent className="card-content">
        <Typography className="date-title" variant="h5">
          {eventData.title}
        </Typography>
        <Typography className="date-type" variant="body2">
          When: {eventData.time}
          <a href={eventData.link}>{eventData.link}</a>
        </Typography>
      </CardContent>
      <Accordion className="card-menu">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="card-menu-title"
        >
          Event Details
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{eventData.description}</Typography>
          <hr />
          <Typography variant="body2">{eventData.address}</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default SelectedEventCard;
