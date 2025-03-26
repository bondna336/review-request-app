// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// ✅ This line imports the route handler
const sendInviteRoute = require('./routes/sendInvite');

// ✅ This line mounts the route at /api
app.use('/api', sendInviteRoute);

app.get('/', (req, res) => {
  res.send('🚀 ReviewSpark backend is live!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
