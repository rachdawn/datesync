import { useState } from 'react'
import axios from 'axios'

const LocalApi = () => {
  const [text, setText] = useState([]);

  const url = "http://localhost:3000/local";

  const fetchData = () => {
    axios.get(url).then((res) => {
      console.log(res.data.local_results);
      setText(res.data.local_results);
    });
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <h1>App</h1>
      <button onClick={handleClick}>Click me to fetch data</button>
      {text.map((data) => (
        <div key={data.position}>
          <img src={data.thumbnail} alt="" />
          <div>{data.title}</div>
          <div>{data.address}</div>
          <div>{data.description}</div>
        </div>
      ))}
    </>
  );
}

export default LocalApi;