const DashboardButtons = ({ dateInfo }) => {
  const today = new Date().toISOString();

  return (
    <>
      {(dateInfo.is_draft) && (
        <span className="date-component-buttons">
          <span className="badge rounded-pill text-bg-danger">Draft</span>
          <a href="" className="btn btn-secondary btn-dashboard">
            Share
          </a>
          <a href="" className="btn btn-secondary btn-dashboard">
            Edit
          </a>
          <a href="" className="btn btn-secondary btn-dashboard">
            Delete
          </a>
        </span>
      )}

      {(dateInfo.scheduled_date < today) && (
        <span className="date-component-buttons">
          <a href="" className="btn btn-secondary btn-dashboard">
            Redo Date
          </a>
          <a href="" className="btn btn-secondary btn-dashboard">
            Delete
          </a>
        </span>
      )}

      {(dateInfo.scheduled_date > today) && (
        <span className="date-component-buttons">
          <a href="" className="btn btn-secondary btn-dashboard">
            Edit
          </a>
          <a href="" className="btn btn-secondary btn-dashboard">
            Share
          </a>
          <a href="" className="btn btn-secondary btn-dashboard">
            Delete
          </a>
        </span>
      )}
    </>
  );
};

export default DashboardButtons;
