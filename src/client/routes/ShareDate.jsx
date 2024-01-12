import { useParams } from "react-router-dom";
import DateComponents from "../components/DateComponents";
import useDates from "../components/hooks/useDates";
import "../styles/ShareDate.scss";

const ShareDate = () => {
  const { id } = useParams();
  const { datesByGroup } = useDates(`/api/share-date/${id}`, { share: true });

  return (
    <>
      {Object.keys(datesByGroup).map((dateId, index) => (
        <span key={index}>
          <section className="header">
            <div>
              <h3>Date with {datesByGroup[dateId][0].user_name}</h3>
            </div>
            <div className="date-date">
              <span className="date">
                Date & Time: {datesByGroup[dateId][0].scheduled_date}{" "}
                {!datesByGroup[dateId][0].scheduled_date && "To be defined"}
              </span>
              <br/>
              <span className="location">Location: </span>
            </div>
          </section>
          <main className="date-components">
            <div>
              <div className="date-group">
                <DateComponents key={dateId} dates={datesByGroup[dateId]} />
              </div>
            </div>
          </main>
        </span>
      ))}
    </>
  );
};

export default ShareDate;
