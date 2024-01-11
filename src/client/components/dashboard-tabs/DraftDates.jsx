import useDates from "../hooks/useDates";
import DateComponents from "../DateComponents";
import DashboardButtons from "../DashboardButtons";
import Divider from "@mui/material/Divider";

const DraftDates = () => {
  const {datesByGroup} = useDates("api/dates", { drafts: true});

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
                Date & Time: {datesByGroup[dateId][0].scheduled_date}{" "}
                {!datesByGroup[dateId][0].scheduled_date && "To be defined"}
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
              dateInfo={datesByGroup[dateId][0]}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default DraftDates;
