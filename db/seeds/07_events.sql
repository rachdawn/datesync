INSERT INTO events (
    category_id,
    component_id,
    title,
    description,
    start_date_time,
    end_date_time,
    location_name,
    address,
    event_type,
    price,
    event_url,
    photo_url
)
VALUES
(2, 4, 'Summer Music Festival', 'An outdoor music festival featuring various artists.', '2024-06-21 12:00:00+00', '2024-06-23 23:00:00+00', 'Central Park', '123 Park Ave, New York, NY', 'Music', 150, 'https://example.com/events/summer-music-festival', 'https://example.com/photos/events/summer-music-festival.jpg'),
(2, 8, 'Charity Marathon', 'A marathon event raising funds for health and wellness charities.', '2024-09-05 07:00:00+00', '2024-09-05 14:00:00+00', 'Downtown', '456 Main St, Chicago, IL', 'Sports', 50, 'https://example.com/events/charity-marathon', 'https://example.com/photos/events/charity-marathon.jpg'),
(2, 11, 'Shakespeare in the Park', 'Free performances of Shakespeare plays in the open air.', '2024-07-10 18:00:00+00', '2024-08-10 21:00:00+00', 'Open Air Theatre', '789 Green Blvd, San Francisco, CA', 'Theatre', 0, 'https://example.com/events/shakespeare-park', 'https://example.com/photos/events/shakespeare-park.jpg');

