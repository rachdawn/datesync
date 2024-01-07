import React, { useState } from 'react';
import axios from 'axios';

const TestEventsApi = () => {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const fetchEvents = () => {
    if (!query) {
      setError('Please enter a search query');
      return;
    }

    const url = `http://localhost:3000/api/events?query=${query}`;
    axios.get(url)
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events');
      });
  };

  return (
    <>
      <h1>Search Events</h1>
      <input 
        type="text" 
        placeholder="Type event query" 
        value={query}
        onChange={e => setQuery(e.target.value)} 
      />
      <button onClick={fetchEvents}>Search</button>
      {error && <p>{error}</p>}
      <div>
        {events.map((event, index) => (
            <div key={index}>
              <h3>{event.title}</h3>
              <p>Date: {event.startDate}</p>
              <p>Time: {event.time}</p>
              <p>Address: {event.address}</p>
              <p>{event.description}</p>
              {event.thumbnail && <img src={event.thumbnail} alt={event.title} />}
              <div>
                {event.ticketLinks?.map((ticket, ticketIndex) => (
                  // target="_blank" serves as opened a linked document to a new tab or window and rel="noonpener noreferrer" serves for maintaining security and privacy when the new page opens:
                  <p key={ticketIndex}><a href={ticket.link} target="_blank" rel="noopener noreferrer">{ticket.source}</a></p>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
};

export default TestEventsApi;
