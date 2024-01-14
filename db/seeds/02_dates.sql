INSERT INTO dates (owner_id, invited_user_id, scheduled_date, is_draft)
VALUES
(1, 2, null, TRUE), -- Date 1, User 1
(1, 3, '2023-01-29 20:00:00', FALSE), -- Date 2, User 1
(1, 2, '2023-02-10 15:30:00', FALSE), -- Date 3, User 1
(1, 4, null, TRUE), -- Date 4, User 1
(1, 5, '2023-02-25 18:45:00', FALSE), -- Date 5, User 1
(1, 3, '2023-03-08 12:00:00', FALSE), -- Date 6, User 1
(2, 6, null, TRUE), -- Date 7, User 2
(2, 6, '2023-04-05 14:20:00', FALSE), -- Date 8, User 2
(2, 7, '2023-04-15 10:00:00', FALSE), -- Date 9, User 2
(2, 3, null, TRUE), -- Date 10, User 2
(2, 1, '2023-05-02 19:30:00', FALSE), -- Date 11, User 2
(3, 2, null, TRUE), -- Date 12, User 3
(3, 1, '2023-05-20 16:45:00', FALSE), -- Date 13, User 3
(3, 2, '2023-06-07 08:15:00', FALSE), -- Date 14, User 3
(3, 1, null, TRUE), -- Date 15, User 3
(3, 5, '2023-06-20 17:30:00', FALSE); -- Date 16, User 3


