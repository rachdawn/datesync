INSERT INTO activities (
    category_id,
    component_id,
    activity_type,
    location_name,
    address,
    description,
    photo_url,
    activity_url
)
VALUES
(4, 6, 'Hiking', 'Blue Mountain Peak', '123 Hillside Road, Blue Mountain', 'Guided hiking tour through the scenic trails of Blue Mountain Peak.', 'https://example-photos.com/activities/hiking-trail.jpg', 'https://example-activities.com/hiking'),
(4, 10, 'Cooking Class', 'Culinary Arts Center', '456 Gourmet Blvd, Foodie Town', 'Hands-on cooking class with renowned chef John Doe.', 'https://example-photos.com/activities/cooking-class.jpg', 'https://example-activities.com/cooking-class'),
(4, 12, 'Pottery Workshop', 'Crafts Village', '789 Artisan Ave, Crafts City', 'Pottery making workshop in a relaxed, creative studio environment.', NULL, NULL),
(4, 16, 'City Bike Tour', 'Metro Bikes', '321 Urban St, Metropolis', 'Explore the city landmarks on a guided bike tour.', 'https://example-photos.com/activities/city-bike-tour.jpg', 'https://example-activities.com/bike-tour');
