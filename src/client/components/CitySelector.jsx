import React, { useState } from 'react';

const cityDetails = {
  Toronto: {
    coordinates: { latitude: 43.65107, longitude: -79.347015 },
    locationString: "Toronto, Ontario, Canada"
  },
  Montreal: {
    coordinates: { latitude: 45.501689, longitude: -73.567256 },
    locationString: "Montreal, Quebec, Canada"
  },
  Vancouver: {
    coordinates: { latitude: 49.28273, longitude: -123.120735 },
    locationString: "Vancouver, British Columbia, Canada"
  },
  Ottawa: {
    coordinates: { latitude: 45.42153, longitude: -75.697193 },
    locationString: "Ottawa, Ontario, Canada"
  },
  Calgary: {
    coordinates: { latitude: 51.044733, longitude: -114.071883 },
    locationString: "Calgary, Alberta, Canada"
  },
  Edmonton: {
    coordinates: { latitude: 53.546124, longitude: -113.493823 },
    locationString: "Edmonton, Alberta, Canada"
  },
  Halifax: {
    coordinates: { latitude: 44.648764, longitude: -63.575239 },
    locationString: "Halifax, Nova Scotia, Canada"
  }
};

const CitySelector = ({ onCitySelect, onCityNameSelect }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    const cityKey = event.target.value;
    setSelectedCity(cityKey);

    const city = cityDetails[cityKey];
    if (city) {
      onCitySelect(city.coordinates);
      onCityNameSelect(city.locationString);
      console.log("City coords:", city.coordinates)
      console.log("City name:", city.locationString)
    }
  };

  return (
    <select value={selectedCity} onChange={handleCityChange}>
      <option value="">Select a city</option>
      {Object.keys(cityDetails).map((cityKey) => (
        <option key={cityKey} value={cityKey}>{cityKey}</option>
      ))}
    </select>
  );
};

export default CitySelector;
