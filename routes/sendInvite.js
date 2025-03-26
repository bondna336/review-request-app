// routes/sendInvite.js
const express = require('express');
const router = express.Router();

router.post('/send-invite', async (req, res) => {
  try {
    const { name, email, phone, send_method } = req.body;

    // Later: save to Supabase

    res.status(200).json({ message: `Invitation saved for ${name}` });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
