import TestActivitiesApi from "../components/TestActivitiesApi";
import TestRestaurantsApi from "../components/TestRestaurantsAPI";

const LandingPage = () => {

  return (
  <>
    <TestRestaurantsApi />
    <TestActivitiesApi />
  </>
  );

};

export default LandingPage;