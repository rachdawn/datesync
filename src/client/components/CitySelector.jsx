import React, { useState } from 'react';

const cityCoordinates = {
  Toronto: { latitude: 43.65107, longitude: -79.347015 },
  Montreal: { latitude: 45.501689, longitude: -73.567256 },
  Vancouver: { latitude: 49.28273, longitude: -123.120735 },
  Ottawa: { latitude: 45.42153, longitude: -75.697193 },
  Calgary: { latitude: 51.044733, longitude: -114.071883 },
  Edmonton: { latitude: 53.546124, longitude: -113.493823 }
};

const CitySelector = ({ onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

    const coordinates = cityCoordinates[city];
    if (coordinates) {
      onCitySelect(coordinates);
    }
  };

  return (
    <select value={selectedCity} onChange={handleCityChange}>
      <option value="">Select a city</option>
      {Object.keys(cityCoordinates).map((city) => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  );
};

export default CitySelector;
