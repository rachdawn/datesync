const DashboardButtons = ({ dateInfo, shareDate, deleteDate }) => {
  const today = new Date().toISOString();

  const handleShare = (id) => shareDate(id);
  const handleDelete = (id) => deleteDate(id);

  return (
    <>
      {dateInfo.is_draft && (
        <span className="date-component-buttons">
          <h5>
            <span className="badge rounded-pill text-bg-danger">Draft</span>
          </h5>
          <a
            onClick={() => handleShare(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            Share
          </a>
          <a href="" className="btn btn-secondary btn-dashboard">
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
          <a className="btn btn-secondary btn-dashboard">Redo Date</a>
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
          <a href="" className="btn btn-secondary btn-dashboard">
            Edit
          </a>
          <a
            onClick={() => handleShare(dateInfo.date_id)}
            className="btn btn-secondary btn-dashboard"
          >
            Share
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
