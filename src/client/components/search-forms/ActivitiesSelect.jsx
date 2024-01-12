import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import axios from "axios";
import useLoading from "../hooks/useLoading";
import LottieSpinner from "../LottieSpinner";

export default function ActivitiesSelect({ onActivitiesFetched, coordinates }) {
  const [activityType, setActivityType] = useState("");
  const [isLoading, startLoading, stopLoading] = useLoading();
  
  const handleEventChange = (event) => {
    setActivityType(event.target.value);
  };

  const handleSubmit = async () => {
    startLoading();
    // Clears previous results:
    onActivitiesFetched([]);
    const queryParams = new URLSearchParams({
      type: activityType,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    }).toString();

    try {
      const response = await axios.get(`/api/activities?${queryParams}`);
      onActivitiesFetched(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      stopLoading();
    }
  };

  return (
    <FormGroup id="search-bar">
      <FormControl className="select" sx={{ m: 1, minWidth: 135 }}>
        <InputLabel id="demo-simple-select-label">Activity Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={activityType}
          onChange={handleEventChange}
          label="Activity Type"
        >
          <MenuItem value={"Hiking area"}>Trails</MenuItem>
          <MenuItem value={"Lake"}>Lakes</MenuItem>
          <MenuItem value={"Museum"}>Museums</MenuItem>
          <MenuItem value={"Zoo"}>Zoos</MenuItem>
          <MenuItem value={"Beach"}>Beaches</MenuItem>
          <MenuItem value={"Ice skating rink"}>Ice Skating</MenuItem>
        </Select>
      </FormControl>
      {isLoading ? <LottieSpinner /> : (
        <button className="submit-search" onClick={handleSubmit} type="button">Submit</button>
      )}
    </FormGroup>
  );
}
