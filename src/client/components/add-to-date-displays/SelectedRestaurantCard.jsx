import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import DeleteIcon from "/src/client/assets/delete-icon.svg";
import "/src/client/styles/DateComponentCards.scss";

const SelectedRestaurantCard = ({ restaurant, onDelete }) => {
  const formatOperatingHours = (operatingHours) => {
    if (!operatingHours) {
      return "Operating Hours Unavailable";
    }
    return operatingHours
      ? Object.entries(operatingHours)
          .map(
            ([day, hours]) =>
              `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`
          )
          .join(", ")
      : "";
  };

  return (
    <Card className="date-card">
      <button className="delete-button" onClick={onDelete}>
        <img src={DeleteIcon} alt="Remove Selection" />
      </button>
      <CardMedia
        component="img"
        className="date-card-img"
        image={restaurant.thumbnail}
        alt={restaurant.title}
      />
      <CardContent className="card-content">
        <Typography className="date-title" variant="h5">
          {restaurant.title}
        </Typography>
        <Typography
          className="date-type"
          variant="body2"
          color="text.secondary"
        >
          {restaurant.type}
        </Typography>
        <div className="restaurant-rating-price">
          <Rating
            className="rating"
            name="read-only"
            value={restaurant.rating}
            readOnly
          />
          <Typography className="price" variant="body2">
            {restaurant.price}
          </Typography>
        </div>
      </CardContent>
      <Accordion className="card-menu">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="card-menu-title"
        >
          Restaurant Details
        </AccordionSummary>
        <AccordionDetails>
          <hr />
          <Typography variant="body2">{restaurant.address}</Typography>
          <hr />
          <Typography className="operating-hours" variant="body2">
            {formatOperatingHours(restaurant.operating_hours)}
          </Typography>
           <a href={restaurant.website}>
            {restaurant.website}
          </a>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default SelectedRestaurantCard;
