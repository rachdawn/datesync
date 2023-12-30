const db = require('../connection');

const getMessages = (senderId, receiverId) => {
  const queryString = `
  SELECT messages.*, users.username AS sender_name, products.thumbnail_photo_url, products.title AS product_name
  FROM messages
  JOIN users ON users.id = messages.sender_id
  JOIN products ON products.id = messages.product_id
  WHERE (messages.sender_id = $1 AND messages.receiver_id = $2)
  OR (messages.sender_id = $2 AND messages.receiver_id = $1)
  ORDER BY messages.sent_date;
  `;

  const values = [senderId, receiverId];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.error('Error executing getMessages query', err);
    });
};


const sendMessage = (product_id, sender_id, receiver_id, content, sent_date) => {
  console.log('sendMessage function received:', product_id, sender_id, receiver_id, content, sent_date);

  const queryString = `
    INSERT INTO messages (product_id, sender_id, receiver_id, content, sent_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`;

  const values = [product_id, sender_id, receiver_id, content, sent_date];

  return db.query(queryString, values)
    .then(data => {
      console.log('sendMessage query result:', data.rows[0]);
      return data.rows[0];
    })
    .catch(error => {
      console.error('Error in sendMessage query:', error);
      throw error;
    });
};

const getUsersWithMessages = (userId) => {
  const queryString = `
    SELECT DISTINCT ON (users.id) users.id, users.username, users.email
    FROM messages
    JOIN users ON users.id = messages.sender_id OR users.id = messages.receiver_id
    WHERE (messages.sender_id = $1 OR messages.receiver_id = $1) AND users.id != $1;
  `;

  const values = [userId];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing getUsersWithMessages query', err.message);
    });

};

// The function below should retrieve all messages where either sender_id or receiver_id matches either of the two user IDs:

const getConversationBetweenUsers = (userId1, userId2) => {
  const queryString = `
    SELECT messages.*, users.username AS sender_username
    FROM messages
    JOIN users ON users.id = messages.sender_id
    WHERE (messages.sender_id = $1 AND messages.receiver_id = $2) OR (messages.sender_id = $2 AND messages.receiver_id = $1)
    ORDER BY messages.sent_date ASC;
  `;

  const values = [userId1, userId2];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Error executing getConversationBetweenUsers query', err.message);
    });
};

module.exports = { getMessages, sendMessage, getUsersWithMessages, getConversationBetweenUsers };
