const express = require('express');
const router = express.Router();

// Example route for sending review invitations
router.post('/send-invite', async (req, res) => {
  try {
    const { name, email, phone, send_method } = req.body;

    console.log('✅ HIT /send-invite route');

    res.status(200).json({ message: `Invitation sent to ${name}` });
  } catch (err) {
    console.error('Error sending invite:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
