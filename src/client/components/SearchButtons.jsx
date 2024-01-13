import ActivitiesModal from "../components/date-modals/ActivitiesModal";
import MoviesModal from "../components/date-modals/MoviesModal";
import RestaurantsModal from "../components/date-modals/RestaurantsModal";
import EventsModal from "../components/date-modals/EventsModal";

// This component serves to render the container with the search buttons in the CreateDate component:
const SearchButtons = ({ coordinates, cityString, handleSelection }) => {
  return(
  <div className="buttons">
    <RestaurantsModal 
    coordinates={coordinates} 
    onRestaurantSelect={(data) => handleSelection('restaurant', data)} 
    />
    <EventsModal cityString={cityString} 
    onEventSelect={(data) => handleSelection('event', data)} 
    />
    <MoviesModal 
    cityString={cityString} 
    onMovieSelection={(data) => handleSelection('movie', data)}
    />
    <ActivitiesModal 
    coordinates={coordinates} 
    onActivitySelect={(data) => handleSelection('activity', data)}
    />
  </div>
  );
};

export default SearchButtons;