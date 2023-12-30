const db = require('../connection');

// Following code consists of db queries:

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// This function will retrieve a user from the database based on the username. This is useful for the login process where you need to check if the user exists and then verify the password:
const getUserByUsername = (username) => {
  const queryString = `SELECT * FROM users WHERE username = $1;`;
  const values = [username];


  return db.query(queryString, values)
    .then(data => {
      if (data.rows.length === 0) {
        return null;
      }
      // Return the first user matching the username
      return data.rows[0];
    })
    .catch(err => console.log('Error executing query', err.message));
};

const getUserWithId = function(id) {
  const queryString = `SELECT * FROM users WHERE id = $1;`;
  const values = [id];

  return db.query(queryString, values)
    .then((data) => {
      if (data.rows.length === 0) {
        console.log(`No user found with id: ${id}`);
        return null;
      }
      // client.end();
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// To use for register functionality:
const addUser = function(user) {
  const queryString = `INSERT INTO users (username, email, password, is_admin) VALUES ($1, $2, $3, $4) RETURNING *`;
  // is_admin is set default to false:
  const values = [user.username, user.email, user.password, user.is_admin || false];

  return db.query(queryString, values)
    .then((data) => {
      console.log(data.rows);
      // Returns the newly added user
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};



module.exports = { getUsers, getUserByUsername, getUserWithId, addUser };
