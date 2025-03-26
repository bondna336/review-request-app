const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabaseClient'); // import your client

router.post('/send-invite', async (req, res) => {
  try {
    const { name, email, phone, send_method } = req.body;

    // Insert into Supabase 'customers' table
    const { error } = await supabase.from('customers').insert([
      {
        name,
        email,
        phone,
        send_method,
        send_date: new Date(), // store current timestamp
        campaign_type: 'manual',
        status: 'pending',
        review_site_visited: false,
      }
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Failed to insert into Supabase' });
    }

    res.status(200).json({ message: `Invitation sent to ${name}` });
  } catch (err) {
    console.error('Error sending invite:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
