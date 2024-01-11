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
import ActivitiesModal from "../components/date-modals/ActivitiesModal";
import MoviesModal from "../components/date-modals/MoviesModal";
import RestaurantsModal from "../components/date-modals/RestaurantsModal";
import EventsModal from "../components/date-modals/EventsModal";
import CitySelector, { cityDetails } from "../components/CitySelector";

const CreateDate = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [cityString, setCityString] = useState('');

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

  const handleCityChange = (cityKey) => {
    console.log("Selected City:", cityKey);
    if (cityDetails[cityKey]) {
      setCoordinates(cityDetails[cityKey].coordinates);
      setCityString(cityDetails[cityKey].locationString);
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
          />
        </section>
        <section className="city-picker">
          <CitySelector onCitySelect={handleCityChange} />
        </section>

        <section className="date-components">
          <div className="component">
            <div className="buttons">
              <RestaurantsModal coordinates={coordinates} />
              <EventsModal cityString={cityString}/>
              <MoviesModal />
              <ActivitiesModal />
            </div>
          </div>
          <div className="component">
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
