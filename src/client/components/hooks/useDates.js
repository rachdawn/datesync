import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

// This hook loads the date components information for all tabs in the Dashboard:
const useDates = (apiEndpoint, queryParams) => {
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(apiEndpoint, { params: queryParams }).then((res) => {
      setDates(res.data);
    });
  }, []);

  const shareDate = (dateId) => {
    navigate(`/dashboard/${dateId}`); // Navigate to details page with the specific dateId
  };

  const datesByGroup = {};
  dates.forEach((date) => {
    const dateId = date.date_id;
    if (!datesByGroup[dateId]) {
      datesByGroup[dateId] = [];
    }
    datesByGroup[dateId].push(date);
  });

  return { datesByGroup, shareDate };
}

export default useDates;