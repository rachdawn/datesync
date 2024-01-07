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

export default router;