import db from "../connection.js";

// Following code consists of db queries:

const getUsers = async () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// This function will retrieve a user from the database based on the username. This is useful for the login process where you need to check if the user exists and then verify the password:
const getUserByEmail = async (email) => {
  const queryString = `SELECT id FROM users WHERE email = $1;`;
  const values = [email];

  return db.query(queryString, values)
    .then(data => {
      return data.rows;
    })
    .catch(err => console.log('Error executing query', err.message));
};

const getUserWithId = async function(id) {
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

// Adding users to our db with the help of auth0 retrieved profile info:
const addUser = async (user) => {
  const queryString = `INSERT INTO users (email, given_name, family_name) VALUES ($1, $2, $3 ) RETURNING *`;
  // Assuming location is part of the user object; otherwise, set a default
  const values = [user.email, user.given_name, user.family_name];

  console.log("Inserting into database:", values);

  return db.query(queryString, values)
  .then(data => {
    console.log("Inserted user:", data.rows[0]);
    return data.rows[0];
  })
  .catch(err => console.log('Error executing query', err.message));
};

// Handles cases to check if the user exists in our db:
const checkUserExists = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows.length > 0;
};


export { getUsers, getUserByEmail, getUserWithId, addUser, checkUserExists };
