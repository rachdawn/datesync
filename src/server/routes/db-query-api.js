import { Router } from 'express';
import { getDateComponents, deleteDate, saveDateDetails } from '../../../db/queries/dates.js';
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

//Route that will render date info to be edited
// router.get('/edit-date/:id', (req, res) => {
//   const { id } = req.params;
  
//   getDateComponents(id, req.query)
//     .then((rows) => {
//       res.json(rows);
//     })
//     .catch(error => {
//       console.error(error);
//       res.send(error);
//     });
// })

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

// Route to add user info to db; does not add if already exists:
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

// POST route to save complete date details:
router.post('/save-complete-date', async (req, res) => {
  try {
    const { user_email, scheduled_date, is_draft, default_location, components } = req.body;
    // We find the user ID based on email:
    const user = await getUserByEmail(user_email);

    if (!user || user.length === 0) {
      res.status(404).send('User not found');
      return;
    }
    const userId = user[0].id;
    console.log("Your userId is", userId);

    // We add the necessary date info to dateDetails
    const dateDetails = {
      owner_id: userId,
      scheduled_date: scheduled_date,
      is_draft: is_draft,
      default_location: default_location,
      components
    };

    // We save the complete date details by calling saveDateDetails function from the db queries file 'dates.js':
    await saveDateDetails(dateDetails);
    res.status(201).send({ message: 'Date saved successfully' });
  } catch (error) {
    console.error('Error in /save-complete-date:', error);
    res.status(500).send({ error: 'Failed to save date' });
  }
});

export default router;