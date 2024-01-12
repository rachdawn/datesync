import { useState, useEffect } from "react"
import axios from "axios"

// This hook loads the date components information for all tabs in the Dashboard:
const useDates = (apiEndpoint, queryParams) => {
  const [dates, setDates] = useState([]);

  // Function to fetch date components
  const fetchDates = async () => {
    
    try {
      const res = await axios.get(apiEndpoint, { params: queryParams });
      setDates(res.data);
    } catch (error) {
      console.error("Error fetching dates:", error);
    }
  };

  // Get components when mounted
  useEffect(() => {
    fetchDates(); 
  }, []);
  
  // Call to DB to delete dates
  const deleteDate = async (dateId) => {
    try {
      await axios.post(`api/delete/${dateId}`);
      fetchDates();
    } catch (error) {
      console.error("Error deleting date:", error);
    }
  }

  // Group date components by their date_id
  const datesByGroup = {};
  dates.forEach((date) => {
    const dateId = date.date_id;
    if (!datesByGroup[dateId]) {
      datesByGroup[dateId] = [];
    }
    datesByGroup[dateId].push(date);
  });

  return { datesByGroup, deleteDate };
}

export default useDates;