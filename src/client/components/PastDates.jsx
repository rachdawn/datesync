import axios from "axios";
import { useEffect, useState } from "react";
import DateComponents from "./DateComponents";

const PastDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("api/dates?pastDates=true").then((res) => {
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

export default PastDates;
