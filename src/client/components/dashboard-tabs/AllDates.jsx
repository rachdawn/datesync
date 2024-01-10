import { useEffect, useState } from "react";
import axios from "axios";
import DateComponents from "../DateComponents";
import DashboardButtons from "../DashboardButtons";
import Divider from "@mui/material/Divider";

const AllDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("/api/dates").then((res) => {
      setDates(res.data);
      console.log(res.data);
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

  console.log(datesByGroup);

  return (
    <>
      <h2 className="date-title">Dates</h2>
      {Object.keys(datesByGroup).map((dateId, index) => (
        <div key={index}>
          <div className="date-group">
            <div>
              <h4 className="date-title">Date ID #{dateId}</h4>
              <p>
                {" "}
                Date & Time: {datesByGroup[dateId][0].scheduled_date}
                {" "}
                {!datesByGroup[dateId][0].scheduled_date && 'To be defined'}
              </p>
            </div>

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

export default AllDates;