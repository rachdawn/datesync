import TestActivitiesApi from "../components/TestActivitiesApi";
import TestEventsApi from "../components/TestEventsApi";
import TestMoviesApi from "../components/TestMoviesApi";
import TestRestaurantsApi from "../components/TestRestaurantsAPI";

const LandingPage = () => {

  return (
  <>
    <TestRestaurantsApi />
    <TestActivitiesApi />
    <TestEventsApi />
    <TestMoviesApi />
  </>
  );

};

export default LandingPage;