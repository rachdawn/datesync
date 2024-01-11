import React, { useState } from "react";
import axios from 'axios';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import FormGroup from "@mui/material/FormGroup";
import Rating from "@mui/material/Rating";
import useLoading from "../hooks/useLoading";
import LottieSpinner from "../LottieSpinner";

export default function RestaurantSelect({ onDataFetched, coordinates }) {
  const [restaurantType, setRestaurantType] = useState("");
  const [rating, setRating] = useState("");
  const [priceLevel, setPriceLevel] = useState("");
  const [isLoading, startLoading, stopLoading] = useLoading();

  const handleRestaurantChange = (event) => {
    setRestaurantType(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPriceLevel(event.target.value);
  };

  const handleSubmit = async () => {
    startLoading();
    const queryParams = new URLSearchParams({
      type: restaurantType,
      rating: rating,
      price: priceLevel,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    }).toString();
    
    try {
      const response = await axios.get(`/api/restaurants?${queryParams}`);
      onDataFetched(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      stopLoading();
    }
  };

  return (
    <FormGroup id="search-bar">
      <FormControl className="select" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel htmlFor="restaurant-type">Restaurant Type</InputLabel>
        <Select
          value={restaurantType}
          id="restaurant-type"
          label="Restaurant Type"
          onChange={handleRestaurantChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Casual</ListSubheader>
          <MenuItem value={"Coffee"}>Cafes & Coffee Shops</MenuItem>
          <MenuItem value={"Pizza"}>Pizza</MenuItem>
          <MenuItem value={"Pub"}>Pubs & Diners</MenuItem>
          <MenuItem value={"Brewery"}>Breweries & Lounges</MenuItem>
          <MenuItem value={"Breakfast"}>Breakfast & Brunch</MenuItem>
          <ListSubheader>Cuisine Type</ListSubheader>
          <MenuItem value={"Steak"}>Steakhouse</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"Mexican"}>Mexican</MenuItem>
          <MenuItem value={"Asian"}>Asian</MenuItem>
          <MenuItem value={"Indian"}>Indian</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="select" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="price-level">Price Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priceLevel}
          label="Price Level"
          onChange={handlePriceChange}
        >
          <MenuItem value="">
            <em>Any Price Level</em>
          </MenuItem>
          <MenuItem value={"$"}>$</MenuItem>
          <MenuItem value={"$$"}>$$</MenuItem>
          <MenuItem value={"$$$"}>$$$</MenuItem>
          <MenuItem value={"$$$$"}>$$$$</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="select" sx={{ m: 1, minWidth: 87, p: 0 }}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Rating"
          onChange={handleRatingChange}
        >
          <MenuItem value="">
            <em>Any Rating</em>
          </MenuItem>
          <MenuItem value={5}>
            <Rating name="half-rating" value={5} precision={0.1} readOnly />
          </MenuItem>
          <MenuItem value={4}>
            <Rating name="half-rating" value={4} precision={0.1} readOnly />
          </MenuItem>
          <MenuItem value={3}>
            <Rating name="half-rating" value={3} precision={0.1} readOnly />
          </MenuItem>
          <MenuItem value={2}>
            <Rating name="half-rating" value={2} precision={0.1} readOnly />
          </MenuItem>
        </Select>
      </FormControl>
      {isLoading ? <LottieSpinner /> : (
      <button className="submit-search" onClick={handleSubmit} type="button">Submit</button>
      )}
    </FormGroup>
  );
}
