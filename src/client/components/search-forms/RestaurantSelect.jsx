import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import FormGroup from "@mui/material/FormGroup";

export default function RestaurantSelect() {
  const [restaurantType, setRestaurantType] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [priceLevel, setPriceLevel] = React.useState("");

  const handleRestaurantChange = (event) => {
    setRestaurantType(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPriceLevel(event.target.value);
  };

  return (
    <FormGroup id="search-bar">
      <FormControl sx={{ m: 1, minWidth: 165 }}>
        <InputLabel htmlFor="restaurant-type">Restaurant Type</InputLabel>
        <Select
          defaultValue={restaurantType}
          id="restaurant-type"
          label="Restaurant Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Casual</ListSubheader>
          <MenuItem value={"Cafes+Coffee Shops"}>Cafes & Coffee Shops</MenuItem>
          <MenuItem value={"Pizza+Wings"}>Pizza & Wings</MenuItem>
          <MenuItem value={"Pubs+Diners"}>Pubs & Diners</MenuItem>
          <MenuItem value={"Breweries+Lounges"}>Breweries & Lounges</MenuItem>
          <MenuItem value={"Breakfast+Brunch"}>Breakfast & Brunch</MenuItem>
          <ListSubheader>Cuisine Type</ListSubheader>
          <MenuItem value={"Steakhouse"}>Steakhouse</MenuItem>
          <MenuItem value={"Wineries & Wine Bars"}>
            Wineries & Wine Bars
          </MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"Mexican"}>Mexican</MenuItem>
          <MenuItem value={"Asian"}>Asian</MenuItem>
          <MenuItem value={"Indian"}>Indian</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 90 }}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={rating}
          label="Rating"
          onChange={handleRatingChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>5 Stars</MenuItem>
          <MenuItem value={4}>4+ Stars</MenuItem>
          <MenuItem value={3}>3+ Stars</MenuItem>
          <MenuItem value={2}>2+ Stars</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 126 }}>
        <InputLabel id="price-level">Price Level</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={priceLevel}
          label="Price Level"
          onChange={handlePriceChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"$"}>$</MenuItem>
          <MenuItem value={"$$"}>$$</MenuItem>
          <MenuItem value={"$$$"}>$$$</MenuItem>
          <MenuItem value={"$$$$"}>$$$$</MenuItem>
        </Select>
      </FormControl>

      <button className="submit-search">Submit</button>
    </FormGroup>
  );
}
