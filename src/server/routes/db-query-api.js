import getDateComponents from '../../db/queries/dates.js';

app.get('/dates', async (req, res) => {
  getDateComponents()
  .then((rows) => {
    res.json(rows);
  })
  .catch(error => {
    console.error(error);
    res.send(error);
  })
});