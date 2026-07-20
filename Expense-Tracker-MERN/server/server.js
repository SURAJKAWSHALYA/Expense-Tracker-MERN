const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Expense Tracker API Running');
});

// A simple POST route to test express.json() middleware
app.post('/api/test-expense', (req, res) => {
  // req.body contains the JSON data sent from the frontend
  const { title, amount, category } = req.body;
  
  if (!title || !amount || !category) {
    return res.status(400).json({ error: 'Please provide title, amount, and category' });
  }

  res.status(201).json({
    message: 'Expense received successfully!',
    receivedData: { title, amount, category }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
