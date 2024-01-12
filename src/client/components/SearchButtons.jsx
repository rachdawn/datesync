import ActivitiesModal from "../components/date-modals/ActivitiesModal";
import MoviesModal from "../components/date-modals/MoviesModal";
import RestaurantsModal from "../components/date-modals/RestaurantsModal";
import EventsModal from "../components/date-modals/EventsModal";

// This component serves to render the container with the search buttons in the CreateDate component:
const SearchButtons = ({ coordinates, cityString }) => {
  return(
  <div className="buttons">
    <RestaurantsModal coordinates={coordinates} />
    <EventsModal cityString={cityString} />
    <MoviesModal cityString={cityString} />
    <ActivitiesModal coordinates={coordinates} />
  </div>
  );
};

export default SearchButtons;