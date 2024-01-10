import TestActivitiesApi from "./TestActivitiesApi";
import TestEventsApi from "./TestEventsApi";
import TestRestaurantsApi from "./TestRestaurantsAPI";
import TestMoviesApi from "./TestMoviesApi";

const TestAPIClient = () => {

  return (
    <>
      <TestActivitiesApi />
      <TestEventsApi />
      <TestRestaurantsApi />
      <TestMoviesApi />
    </>
  );
};

export default TestAPIClient;

