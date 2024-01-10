import { Router } from 'express';
import validateAccessToken from '../middleware/auth0.middleware.js';

const router = Router();

router.get('/dashboard-data', validateAccessToken, (req, res) => {
  console.log("Fetching dashboard data")
  try {
    const data = { message: 'This is a hello from protected dashboard data endpoint' };
    console.log("dashboard data:", data);
    res.json(data);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

