const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);

// POST /api/send-invite
router.post('/send-invite', async (req, res) => {
  const { name, email, phone, send_method } = req.body;

  try {
    // Insert new customer into Supabase
    const { data, error } = await supabase.from('customers').insert([
      {
        name,
        email,
        phone,
        send_method,
        send_date: new Date(),
        status: 'pending',
        campaign_type: 'default'
      }
    ]);

    if (error) throw error;

    res.status(200).json({ message: `✅ Invitation saved for ${name}` });
  } catch (err) {
    console.error('Error saving invite:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
