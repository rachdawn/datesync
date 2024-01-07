import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const MoviesNearMe = ({ movies }) => {
  const [showtimes, setShowtimes] = useState([]);
  const [showShowtimesModal, setShowShowtimesModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowtimes = async (movieName) => {
    try {
      // Calling on a subsequent endpoint for the movie showtimes:
      const response = await axios.get(`/api/movie-showtimes`, { params: { movieName } });
      setShowtimes(response.data); 
      setSelectedMovie(movieName);
      setShowShowtimesModal(true);
    } catch (error) {
      console.error('Error fetching showtimes:', error);
    }
  };

  return (
    // Contains the display of movies near the user's location:
    <Container>
      <h1 className="text-center mt-4 mb-4">Movies Near Me</h1>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={movie.image} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.details}</Card.Text>
                <Button variant="primary" onClick={() => handleShowtimes(movie.title)}>Showtimes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* This is the showtimes modal once you click the showtimes button on a specific movie the modal will open*/}
      <Modal show={showShowtimesModal} onHide={() => setShowShowtimesModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Showtimes for {selectedMovie}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Map showtimes state and display the showtimes */}
          {showtimes.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h5>{day.day}, {day.date}</h5>
                {day.theaters.map((theater, theaterIndex) => (
                  <div key={theaterIndex}>
                    <strong>{theater.name}</strong>
                    <p>{theater.address}</p>
                    {theater.showing.map((show, showIndex) => (
                      <p key={showIndex}>{show.type}: {show.time.join(', ')}</p>
                    ))}
                  </div>
                ))}
              </div>
            ))
          }
      </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MoviesNearMe;


