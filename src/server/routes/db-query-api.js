import { Router } from 'express';
import getDateComponents from '../../../db/queries/dates.js';

const router = Router();

router.get('/dates', async (req, res) => {
  getDateComponents()
  .then((rows) => {
    res.json(rows);
  })
  .catch(error => {
    console.error(error);
    res.send(error);
  })
});

export default router;