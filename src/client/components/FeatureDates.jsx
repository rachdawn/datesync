import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FeatureDates({ date }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={date.src} alt="date" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {date.title}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {date.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
