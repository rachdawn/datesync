import useDates from "./hooks/useDates";

const DashboardButtons = ({ dateInfo, deleteDate }) => {
  const { copyToClipboard, copied } = useDates(
    `api/share-date/${dateInfo.date_id}`,
    { share: true }
  );
  const today = new Date().toISOString();

  const handleDelete = (id) => deleteDate(id);

  return (
    <>
      {dateInfo.is_draft && (
        <span className="date-component-buttons">
          <h5>
            <span className="badge rounded-pill text-bg-danger">Draft</span>
          </h5>
          <a
            onClick={() => copyToClipboard(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            {copied ? "Copied!" : "Share"}
          </a>
          <a
            // href={`/edit-date/${dateInfo.date_id}`}
            className="btn btn-secondary btn-dashboard"
          >
            Edit
          </a>
          <a
            onClick={() => handleDelete(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            Delete
          </a>
        </span>
      )}

      {dateInfo.scheduled_date < today && (
        <span className="date-component-buttons">
          <a
            // href={`/edit-date/${dateInfo.date_id}`}
            className="btn btn-secondary btn-dashboard"
          >
            Redo
          </a>
          <a
            onClick={() => handleDelete(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            Delete
          </a>
        </span>
      )}

      {dateInfo.scheduled_date > today && (
        <span className="date-component-buttons">
          <a
            onClick={() => copyToClipboard(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            {copied ? "Copied!" : "Share"}
          </a>
          <a
            // href={`/edit-date/${dateInfo.date_id}`}
            className="btn btn-secondary btn-dashboard"
          >
            Edit
          </a>
          <a
            onClick={() => handleDelete(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            Delete
          </a>
        </span>
      )}
    </>
  );
};

export default DashboardButtons;
