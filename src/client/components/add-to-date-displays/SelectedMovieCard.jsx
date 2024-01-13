import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SelectedMovieCard = ({ movie }) => {
  // The movie object is nested within another object thus the following destructuring:
  const { movie: { title, image, details }, showtime } = movie;
  const { day, date, time, theater } = showtime;

  return (
    <Card className="selected-movie-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />

        <Typography variant="body1" color="text.secondary">
          {details}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Selected Showtime: {time} on {day}, {date}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          At: {theater.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Address: {theater.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SelectedMovieCard;