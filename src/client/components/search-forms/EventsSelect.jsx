import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";

export default function EventsSelect() {
  const [eventType, setEventType] = React.useState("");
  const handleChange = (event) => {
    setEventType(event.target.value);
  };
  return (
    <FormGroup id="search-bar">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={eventType}
          onChange={handleChange}
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-autowidth"
          htmlFor="event-search"
          label="Search"
        ></InputLabel>
        <TextField label="Search" id="event-search" />
      </FormControl>
      <button className="submit-search">Submit</button>
    </FormGroup>
  );
}
