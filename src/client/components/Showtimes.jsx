import { Typography, ButtonGroup, Button, Card, CardContent, CardActions, Grid } from '@mui/material';

const Showtimes = ({ showtimes, selectedMovie, handleBackToMovies }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Showtimes for {selectedMovie.title}
      </Typography>
      <Button size="small" onClick={handleBackToMovies}>
        Back to Movies
      </Button>

      {showtimes.map((day, dayIndex) => (
        <Card key={dayIndex} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{day.day}, {day.date}</Typography>
            <Grid container spacing={2}>
              {day.theaters.map((theater, theaterIndex) => (
                <Grid item key={theaterIndex} xs={12} sm={6} md={12}>
                  <Card sx={{ p: 2 }}>
                    <CardContent>
                      <Typography variant="subtitle1">{theater.name}</Typography>
                      <Typography variant="body2">{theater.address}</Typography>
                      {theater.showing.map((show, showIndex) => (
                        <ButtonGroup key={showIndex} variant="text" aria-label="text button group" fullWidth>
                          {show.time.map((time, timeIndex) => (
                            <Button key={timeIndex}>
                              {time} ({show.type})
                            </Button>
                          ))}
                        </ButtonGroup>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Showtimes;
