import TestActivitiesApi from "../components/TestActivitiesApi";
import TestEventsApi from "../components/TestEventsApi";
import TestRestaurantsApi from "../components/TestRestaurantsAPI";

const LandingPage = () => {

  return (
  <>
    <TestRestaurantsApi />
    <TestActivitiesApi />
    <TestEventsApi />
  </>
  );

};

export default LandingPage;