import {
  Typography,
  ButtonGroup,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import backArrow from "../assets/backArrow.svg";
const Showtimes = ({ showtimes, selectedMovie, handleBackToMovies }) => {
  return (
    <div>
      <Button
        className="movies-back-button"
        size="small"
        onClick={handleBackToMovies}
      >
        <img src={backArrow} alt="back to movies" className="back-arrow" /> Back
        to Movies
      </Button>
      <Typography className="showtime-title">
        <h4>{selectedMovie.title} - Showtimes</h4>
      </Typography>

      {showtimes.map((day, dayIndex) => (
        <Card className="showtimes" key={dayIndex} sx={{ mb: 2 }}>
          <CardContent sx={{ pt: 0 }}>
            <Typography className="showtime-date" variant="h6">
              {day.day}, {day.date}
            </Typography>
            <Grid container spacing={1}>
              {day.theaters.slice(0, 6).map((theater, theaterIndex) => (
                <Grid item key={theaterIndex} className="card-width">
                  <Card sx={{ p: 0 }}>
                    <CardContent className="theater-card">
                      <div className="theater-details">
                        <Typography className="theater-name">
                          {theater.name}
                        </Typography>
                        <Typography className="theater-address">
                          {theater.address}
                        </Typography>
                      </div>

                      {theater.showing.map((show, showIndex) => (
                        <div className="theater-times" key={showIndex}>
                          {show.time.map((time, timeIndex) => (
                            <Button
                              variant="outlined"
                              className="movie-time"
                              key={timeIndex}
                            >
                              <p className="show-time">{time}</p>
                              <p className="show-type">({show.type})</p>
                            </Button>
                          ))}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Showtimes;
