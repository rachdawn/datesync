import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const SelectedEventCard = ({ eventData }) => {

  return (
    <Card className="selected-card">
      <div className="card-content">
        <CardMedia
          component="img"
          className="result-img"
          image={eventData.thumbnail}
          alt={eventData.title}
        />
        <CardContent>
          <Typography variant="h5">{eventData.title}</Typography>
          <Typography variant="subtitle1">{eventData.description}</Typography>
          <a href={eventData.link}>{eventData.link}</a>
          <Typography variant="body2">Venue: {eventData.venue} | Address: {eventData.address} </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default SelectedEventCard;