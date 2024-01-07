import { useState } from 'react';
import axios from 'axios';

const TestActivitiesApi = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  const type = 'Park'; 

  const url = `http://localhost:3000/api/activities?type=${type}`;

  const fetchData = () => {
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setActivities(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      });
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <h1>Test Activities with LocalApi</h1>
      <button onClick={handleClick}>Fetch activity data</button>
      {error && <p>{error}</p>}
      {activities.map((activity, index) => (
        <div key={index}>
          <img src={activity.thumbnail} alt={activity.title} />
          <div>{activity.title}</div>
          <div>{activity.type}</div>
          <div>{activity.address}</div>
          <div>{activity.description}</div>
        </div>
      ))}
    </>
  );
}

export default TestActivitiesApi;
