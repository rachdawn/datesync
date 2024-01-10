import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";

export default function ActivitiesSelect() {
  const [activityType, setActivityType] = React.useState("");
  const handleChange = (event) => {
    setActivityType(event.target.value);
  };
  return (
    <FormGroup id="search-bar">
      <FormControl className="select" sx={{ m: 1, minWidth: 135 }}>
        <InputLabel id="demo-simple-select-label">Activity Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={activityType}
          onChange={handleChange}
          label="Activity Type"
        >
          <MenuItem value={"Trails"}>Trails</MenuItem>
          <MenuItem value={"Lakes"}>Lakes</MenuItem>
          <MenuItem value={"Museums"}>Museums</MenuItem>
          <MenuItem value={"Zoos"}>Zoos</MenuItem>
          <MenuItem value={"Beaches"}>Beaches</MenuItem>
          <MenuItem value={"Ice+Skating"}>Ice Skating</MenuItem>
        </Select>
      </FormControl>
    </FormGroup>
  );
}
