const DateComponents = ({ dates }) => (
  <div className="date-group">
    {dates.map(
      (item, index) =>
        item.movie_title && (
          <article key={index}>
            <img src={item.movie_photo_url} alt="" />
            <div>
              <p>{item.movie_title}</p>
              <p>{item.movie_theatre}</p>
              <p>{item.movie_address}</p>
            </div>
          </article>
        )
    )}
    {dates.map(
      (item, index) =>
        item.restaurant_name && (
          <article key={index}>
            <img src={item.restaurant_photo_url} alt="" />
            <div>
              <p>{item.restaurant_name}</p>
              <p>{item.restaurant_address}</p>
              <p>{item.restaurant_website_url}</p>
            </div>
          </article>
        )
    )}
    {dates.map(
      (item, index) =>
        item.event_title && (
          <article key={index}>
            <img src={item.event_photo_url} alt="" />
            <div>
              <p>{item.event_title}</p>
              <p>{item.event_description}</p>
              <p>{item.event_url}</p>
            </div>
          </article>
        )
    )}
    {dates.map(
      (item, index) =>
        item.activity_type && (
          <article key={index}>
            <img src={item.activity_photo_url} alt="" />
            <div>
              <p>{item.activity_type}</p>
              <p>{item.activity_location}</p>
              <p>{item.activity_address}</p>
            </div>
          </article>
        )
    )}
  </div>
);

export default DateComponents;
