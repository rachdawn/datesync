import { useState } from 'react';
import axios from 'axios';

const TestRestaurantsApi = () => {
  const [text, setText] = useState([]);
  const [error, setError] = useState('');

  const type = 'Italian';
  const rating = '4'; 
  const price = '$$$';

  const url = `http://localhost:3000/api/restaurants?type=${type}&rating=${rating}&price=${price}`;

  const fetchData = () => {
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setText(res.data);
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
      <h1>Test Restaurants with LocalApi</h1>
      <button onClick={handleClick}>Fetch restaurant data</button>
      {error && <p>{error}</p>}
      {text.map((data, index) => (
        <div key={index}>
          <img src={data.thumbnail} alt={data.title} />
          <div>{data.title}</div>
          <div>{data.type}</div>
          <div>{data.address}</div>
          <div>{data.description}</div>
          <div>{data.rating}</div>
          <div>{data.price}</div>
        </div>
      ))}
    </>
  );
}

export default TestRestaurantsApi;
