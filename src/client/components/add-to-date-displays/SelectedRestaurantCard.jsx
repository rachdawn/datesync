import Rating from "@mui/material/Rating";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const SelectedRestaurantCard = ({ restaurant }) => {

  const formatOperatingHours = (operatingHours) => {
    return operatingHours ? Object.entries(operatingHours).map(([day, hours]) => `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`).join(', ') : '';
  };

  return (
    <Card className="selected-card">
      <div className="card-content">
        <CardMedia
          component="img"
          className="result-img"
          image={restaurant.thumbnail}
          alt={restaurant.title}
        />
        <CardContent>
          <Typography variant="h5">{restaurant.title}</Typography>
          <Typography variant="subtitle1">{restaurant.address}</Typography>
          <Rating
            name="read-only"
            value={restaurant.rating}
            readOnly
          />
          <Typography variant="body2">Cuisine: {restaurant.type}</Typography>
          <Typography variant="body2">Price Level: {restaurant.price}</Typography>
          <Typography variant="body2">Hours: {formatOperatingHours(restaurant.operating_hours)}</Typography>
          <a href={restaurant.website}>
            {restaurant.website}
          </a>
        </CardContent>
      </div>
    </Card>
  );
}

export default SelectedRestaurantCard;