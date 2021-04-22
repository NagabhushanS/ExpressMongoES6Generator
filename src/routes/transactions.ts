import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
    res.send('Ping Transaction');
});

export default router;