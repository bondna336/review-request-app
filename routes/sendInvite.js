router.post('/send-invite', async (req, res) => {
  console.log("✅ HIT /send-invite route");

  const { name, email, phone, send_method } = req.body;

  res.status(200).json({ message: `Received invite for ${name}` });
});
