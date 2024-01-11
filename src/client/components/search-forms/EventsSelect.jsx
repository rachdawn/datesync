import React, { useState } from 'react';
import axios from 'axios';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import useLoading from '../hooks/useLoading';
import LottieSpinner from '../LottieSpinner';

export default function EventsSelect({ onEventsFetched, cityString }) {
  const [eventType, setEventType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, startLoading, stopLoading] = useLoading();

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async () => {
    // Construct the search query:
    const combinedQuery = `${eventType} ${searchQuery}`.trim();
    startLoading();
    try {
      // Send a GET request to the backend with the combined query and the city string:
      const response = await axios.get(`/api/events`, {
        params: {
          query: combinedQuery,
          cityString: cityString 
        }
      });
      // Pass the data back to the eventsmodal parent component:
      onEventsFetched(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      stopLoading();
    }
  };
  
  return (
    <FormGroup id="search-bar">
      <FormControl className="select" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="event-type-label">Event Type</InputLabel>
        <Select
          labelId="event-type-label"
          id="event_id"
          value={eventType}
          onChange={handleEventTypeChange}
          label="Event Type"
        >
          <MenuItem value={"Sports"}>Sports</MenuItem>
          <MenuItem value={"Concerts"}>Concerts</MenuItem>
          <MenuItem value={"Festivals"}>Festivals</MenuItem>
          <MenuItem value={"Nightlife"}>Nightlife</MenuItem>
          <MenuItem value={"Live Theatre"}>Live Theatre</MenuItem>
          <MenuItem value={"Comedy Shows"}>Comedy Shows</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="select" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-autowidth"
          htmlFor="event-search"
          label="Search"
        ></InputLabel>
        <TextField
          label="Search"
          id="event-search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </FormControl>
      {isLoading ? <LottieSpinner /> : (
        <button className="submit-search" onClick={handleSubmit} type="button">Submit</button>
      )}
    </FormGroup>
  );
}
