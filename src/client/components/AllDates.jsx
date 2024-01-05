import { useEffect, useState } from "react";
import "../styles/Dashboard.scss";
import axios from "axios";
import DateComponents from "./DateComponents";

const AllDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get('/api/dates').then((res) => {
      console.log(res.data)
      setDates(res.data);
    });
  }, []);

  const datesByGroup = {};
  dates.forEach(date => {
    const dateId = date.date_id;
    if (!datesByGroup[dateId]) {
      datesByGroup[dateId] = [];
    }
    datesByGroup[dateId].push(date);
  });

  return (
    <>
      {/* <article>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h3>Hello from ALL your dates! 👀</h3>
      </article>
      <article>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h3>Hello from ALL your dates! 👀</h3>
      </article>      
      <article>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h3>Hello from ALL your dates! 👀</h3>
      </article> */}
      <h2 style={{ color: "#fff" }}>Dates</h2>
      <div>
        {Object.keys(datesByGroup).map((dateId, index) => (
          <div key={index}>
            <h4 style={{ color: "#fff" }}>Date {dateId}</h4>
            <DateComponents key={dateId} dates={datesByGroup[dateId]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllDates;
