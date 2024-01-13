import { Typography, ButtonGroup, Button, Card, CardContent, CardActions, Grid } from '@mui/material';

const Showtimes = ({ showtimes, selectedMovie, handleBackToMovies, onShowtimeSelect }) => {

  // This function is called when a user selects a specific showtime. It builds an object (selectedShowtime) containing details about the selected movie and the chosen showtime (including showtime info). It also calls on onShowtimeSelct to handle selectedShowtime in the parent component:
  const handleShowtimeSelect = (day, theater, time) => {
    const selectedShowtime = {
      movie: selectedMovie,
      showtime: {
        day: day.day,
        date: day.date,
        time: time,
        theater: {
          name: theater.name,
          address: theater.address
        }
      }
    };

    onShowtimeSelect(selectedShowtime);
  };

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
                            <Button key={timeIndex} onClick={() => handleShowtimeSelect(day, theater, time)}>
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
