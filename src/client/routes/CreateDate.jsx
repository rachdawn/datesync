import React, { useState } from "react";
import "../styles/CreateDate.scss";
import "../styles/SearchModals.scss";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FeatureDates from "../components/FeatureDates";
import CitySelector from "../components/CitySelector";
import SearchButtons from "../components/SearchButtons";
import SelectedRestaurantCard from "../components/add-to-date-displays/SelectedRestaurantCard";
import SelectedEventCard from "../components/add-to-date-displays/SelectedEventCard";
import SelectedActivityCard from "../components/add-to-date-displays/SelectedActivityCard";
import SelectedMovieCard from "../components/add-to-date-displays/SelectedMovieCard";

const CreateDate = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [cityString, setCityString] = useState('');
  const [componentsList, setComponentsList] = useState([{ category:'add' }]);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  
  const featureDates = [
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Healthy date",
      description:
        "Nourish love with a delightful, nutritious dinner, a romantic stroll, and shared laughter under starlight.",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fancy lunch",
      description:
        "Savor exquisite flavors in a chic ambiance with our gourmet lunch, a sophisticated culinary indulgence awaits.",
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Late-night drinks",
      description:
        "Sip under the stars in a cozy ambiance, where late-night drinks spark laughter, intimacy, and connection.",
    },
    {
      src: "https://images.unsplash.com/photo-1539056276907-dc946d5098c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Friends Dinner",
      description:
        "Relish a delightful evening with friends over a homemade feast, laughter, and shared memories together.",
    },
  ];

  const handleCityChange = (selectedCoordinates) => {
    setCoordinates(selectedCoordinates);
  };

  const handleCityStringChange = (selectedCityString) => {
    setCityString(selectedCityString);
  };

  // Function to handle selections of any category of date component such as restaurant, activity, event and movie:
  const handleSelection = (category, data) => {
    // Add the selected item to componentsList and a new empty container:
    setComponentsList([...componentsList.slice(0, -1), { category, data }, { category: 'add' }]);
  };

  // Function to render an added date component container based on its category:
  const renderContainer = (item, index) => {
    switch (item.category) {
      case 'restaurant':
        return <SelectedRestaurantCard key={index} restaurant={item.data} />;
      case 'event':
        return <SelectedEventCard key={index} eventData={item.data} />;
      case 'movie':
        return <SelectedMovieCard key={index} movie={item.data} />;
      case 'activity':
        return <SelectedActivityCard key={index} activity={item.data} />;
      case 'add':
        return (
          <div key={index} className="component">
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                 <Fab
                  className="add-button"
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </Box>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <main className="create-date">
        <section className="featured">
          <div className="feature-carousel">
          <div className="feature-title">
            <h2>Feature Dates</h2>
          </div>
            <div className="cards">
              {featureDates.map((date, index) => (
                <div key={index}>
                  <FeatureDates date={date} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="time-picker">
          <DateTimePicker
            className="picker"
            label="Choose event date and time"
            value={selectedDateTime}
            onChange={setSelectedDateTime}
            textField={(params) => <TextField {...params} />}
          />
        </section>
        <section className="city-picker">
          <CitySelector 
          onCitySelect={handleCityChange} 
          onCityNameSelect={handleCityStringChange}
          />
        </section>
        <section className="date-components">
            <div className="component">
              <SearchButtons 
                coordinates={coordinates} 
                cityString={cityString} 
                handleSelection={handleSelection}
                />
            </div>
          {/* Map over componentsList and render based on the category */}
          {componentsList.map((item, index) => renderContainer(item, index))} 
        </section>
        <section className="complete">
          <div className="buttons">
            <button>Save for later</button>
            <button>Complete Date</button>
          </div>
        </section>
      </main>
    </LocalizationProvider>
  );
};

export default CreateDate;
