import { useState, useEffect } from "react"
import axios from "axios"

// This hook loads the date components information for all tabs in the Dashboard:
const useDates = (apiEndpoint, queryParams) => {
  const [dates, setDates] = useState([]);
  const [copied, setCopied] = useState(false); 

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

  // Function that copies the address to shareDate page
  const copyToClipboard = (dateId) => {
    const shareLink = `${window.location.origin}/share-date/${dateId}`;

    navigator.clipboard.writeText(shareLink)
      .then(() => {
        setCopied(true); 
      })
      .catch((error) => console.error('Error copying to clipboard:', error));
  };

  // Group date components by their date_id
  const datesByGroup = {};
  dates.forEach((date) => {
    const dateId = date.date_id;
    if (!datesByGroup[dateId]) {
      datesByGroup[dateId] = [];
    }
    datesByGroup[dateId].push(date);
  });

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(new Date(dateTimeString));
    return formattedDate;
  };

  return { datesByGroup, deleteDate, copyToClipboard, copied, formatDateTime };
}

export default useDates;