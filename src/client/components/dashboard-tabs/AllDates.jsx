import { useEffect, useState } from "react";
import axios from "axios";
import DateComponents from "../DateComponents";

const AllDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("/api/dates").then((res) => {
      console.log(res.data);
      setDates(res.data);
    });
  }, []);

  const datesByGroup = {};
  dates.forEach((date) => {
    const dateId = date.date_id;
    if (!datesByGroup[dateId]) {
      datesByGroup[dateId] = [];
    }
    datesByGroup[dateId].push(date);
  });

  return (
    <>
      <h2 style={{ color: "#fff" }}>Dates</h2>
      {Object.keys(datesByGroup).map((dateId, index) => (
        <div key={index}>
          <h4 style={{ color: "#fff" }}>Date {dateId}</h4>
          <DateComponents key={dateId} dates={datesByGroup[dateId]} />
        </div>
      ))}
    </>
  );
};

export default AllDates;