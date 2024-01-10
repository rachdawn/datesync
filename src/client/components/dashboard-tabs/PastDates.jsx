import axios from "axios";
import { useEffect, useState } from "react";
import DateComponents from "../DateComponents";
import DashboardButtons from "../DashboardButtons";
import Divider from "@mui/material/Divider";

const PastDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("api/dates?pastDates=true").then((res) => {
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
          <div className="date-group">
            <Divider
              className="divider"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <DateComponents key={dateId} dates={datesByGroup[dateId]} />
            <Divider
              className="divider"
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <DashboardButtons
              key={dateId + 1}
              dateInfo={datesByGroup[dateId][0]}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default PastDates;
