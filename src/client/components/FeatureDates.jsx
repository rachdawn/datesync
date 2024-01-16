import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/FeatureDates.scss";

export default function FeatureDates({ date }) {
  return (
    <Card className="feature-card">
      <CardActionArea>
        <CardMedia component="img" height="340" image={date.src} alt="date" />
        <CardContent className="feature-desktop">
          <Typography
            className="date-title"
            gutterBottom
            variant="h6"
            component="div"
          >
            {date.title}
          </Typography>
          <Typography variant="body" color="text.secondary" className="description-text">
            {date.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
