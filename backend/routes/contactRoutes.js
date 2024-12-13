const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { sendMessage } = require('../controllers/contactController');

router.post('/send-message', sendMessage);
router.get('/messages', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching messages:', error); // Debug log
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});
  

module.exports = router;
