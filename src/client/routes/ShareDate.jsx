import { useParams } from "react-router-dom";
import DateComponents from "../components/DateComponents";
import useDates from "../components/hooks/useDates";
import "../styles/ShareDate.scss";

const ShareDate = () => {
  const { id } = useParams();
  const { datesByGroup, formatDateTime } = useDates(`/api/share-date/${id}`, {
    share: true,
  });

  return (
    <div className="content">
      {Object.keys(datesByGroup).map((dateId, index) => (
        <div key={index} className="share-date">
          <section className="header">
            <div>
              <h3>Date with {datesByGroup[dateId][0].user_name}</h3>
            </div>
            <div className="date-date">
              <span className="date">
                Date & Time:{" "}
                {datesByGroup[dateId][0].scheduled_date
                  ? formatDateTime(datesByGroup[dateId][0].scheduled_date)
                  : " To be defined"}
              </span>
              <br />
            </div>
          </section>
          <main className="date-components">
            <div>
              <div className="date-group">
                <DateComponents key={dateId} dates={datesByGroup[dateId]} />
              </div>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
};

export default ShareDate;
