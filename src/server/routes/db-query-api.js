import { Router } from 'express';
import { getDateComponents, deleteDate } from '../../../db/queries/dates.js';

const router = Router();
const id = 1;

// Route to load date components in dashboard
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
})

export default router;