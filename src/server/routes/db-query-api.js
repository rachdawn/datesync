import { Router } from 'express';
import getDateComponents from '../../../db/queries/dates.js';

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