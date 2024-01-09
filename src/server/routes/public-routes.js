import { Router } from 'express';

const router = Router();

router.get('/landingpage-data', (req, res) => {
  try {
    const data = { message: 'This is a hello from public landingpage data endpoint' };
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;