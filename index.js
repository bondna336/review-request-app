const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());

// Import your route
const sendInviteRoute = require('./routes/sendInvite');

// Mount route under /api
app.use('/api', sendInviteRoute);

// Default route
app.get('/', (req, res) => {
  res.send('🚀 ReviewSpark backend is live!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
