const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data array
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// Endpoints
app.get('/api/users', (req, res) => {
  res.json(users); // Serve the array
});

app.get('/api/one', (req, res) => {
  res.json({ message: 'This is endpoint one' });
});

app.get('/api/two', (req, res) => {
  res.json({ message: 'This is endpoint two' });
});

app.get('/api/three', (req, res) => {
  res.json({ message: 'This is endpoint three' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
