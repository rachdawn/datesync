import { Router } from 'express';
import getDateComponents from '../../../db/queries/dates.js';
import { addUser, checkUserExists } from '../../../db/queries/auth0users.js';

const router = Router();
const id = 1;

router.get('/dates', (req, res) => {
  getDateComponents(id, req.query)
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