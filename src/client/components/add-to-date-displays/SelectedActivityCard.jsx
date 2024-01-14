import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const SelectedActivityCard = ({ activity }) => {

  return (
    <Card className="selected-card">
      <div className="card-content">
        <CardMedia
          component="img"
          className="result-img"
          image={activity.thumbnail}
          alt={activity.title}
        />
        <CardContent>
        <Typography variant="h5">{activity.type}</Typography>
          <Typography variant="h5">{activity.title}</Typography>
          <Typography variant="subtitle1">{activity.description}</Typography>
          <Typography variant="body2">Address: {activity.address} </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default SelectedActivityCard;