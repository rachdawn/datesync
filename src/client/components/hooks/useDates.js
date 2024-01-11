import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

// This hook loads the date components information for all tabs in the Dashboard:
const useDates = (apiEndpoint, queryParams) => {
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();

  // Function to fetch date components
  const fetchData = async () => {
    axios.get(apiEndpoint, { params: queryParams })
      .then((res) => {
        setDates(res.data);
      }) 
      .catch(error => {
      console.error("Error fetching dates:", error);
    })
  };

  // Get components when mounted
  useEffect(() => {
    fetchData(); 
  }, []);

  // Navigate to details page with the specific dateId
  const shareDate = (dateId) => {
    navigate(`/dashboard/${dateId}`); 
  };

  
  // Call to DB to delete dates
  const deleteDate = async (dateId) => {
    try {
      await axios.post(`api/delete/${dateId}`);
      fetchData();
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

  return { datesByGroup, shareDate, deleteDate };
}

export default useDates;