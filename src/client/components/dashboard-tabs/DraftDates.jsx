import axios from "axios";
import { useEffect, useState } from "react";
import DateComponents from "../DateComponents";

const DraftDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("api/dates?drafts=true").then((res) => {
      // console.log(res.data);
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
      <h2 className="date-title">Dates</h2>
      {Object.keys(datesByGroup).map((dateId, index) => (
        <div key={index}>
          <h4 className="date-title">Date ID #{dateId}</h4>
          <DateComponents key={dateId} dates={datesByGroup[dateId]} />
        </div>
      ))}
    </>
  );
};

export default DraftDates;
