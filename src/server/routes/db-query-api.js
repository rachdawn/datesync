import { Router } from 'express';
import { getDateComponents, deleteDate } from '../../../db/queries/dates.js';
import { addUser, checkUserExists, getUserByEmail } from '../../../db/queries/auth0users.js';

const router = Router();
// const email = 'ana@email.com';

// Route to load date components in dashboard
router.get('/dates', (req, res) => {
  const email = req.query.email;

  getUserByEmail(email)
    .then((user) => {
      if (!user || !user.length) {
        res.status(404).json({ error: 'User not found' });
        return Promise.reject('User not found');
      }

      const userId = user[0].id;
      return getDateComponents(userId, req.query);
    })
    .then((rows) => {
      res.json(rows);
    })
  .catch(error => {
    console.error(error);
    res.send(error);
  })
});

//Route that will render date info to be shared
router.get('/share-date/:dateId', (req, res) => {
  const { dateId } = req.params;

  getDateComponents(dateId, req.query)
  .then((rows) => {
    res.json(rows);
  })
  .catch(error => {
    console.error(error);
    res.send(error);
  })
})

//Route to delete date from dashboard
router.post('/delete/:dateId', (req, res) => {
  const {dateId} = req.params;

  deleteDate(dateId)
  .then((rows) => {
    res.json(rows);
  })
  .catch(error => {
    console.error(error);
    res.send(error);
  })
});

router.post('/users', async (req, res) => {
  try {
    console.log("Received data for user:", req.body);
    const { email, given_name, family_name } = req.body;

    if(await checkUserExists(email)) {
      // User already exists and the info wont be added to the DB again:
      res.status(200).json({ message: 'Existing user, user will not be added again to DB' });
  } else {
    // Add new user to DB:
    const newUser = await addUser({ email, given_name, family_name });
    res.status(201).json({ message: 'New user added successfully' });
  }
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).json({ error: 'Failed to add user' });
  }
});


// POST route to add a new event to the db:
router.post('/events', async (req, res) => {
  try {
    const eventData = req.body;
    await insertEvent(eventData);
    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    console.error('Error adding event:', error.message);
    res.status(500).json({ error: 'Failed to add event' });
  }
});



export default router;