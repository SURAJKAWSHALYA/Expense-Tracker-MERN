const express = require('express');
const cors = require('cors');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const healthRoutes = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 5000;

// Regular Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL
}));

// API Routes
app.use('/api', healthRoutes);

// A simple POST route to test express.json() middleware (from Part 2)
app.post('/api/test-expense', (req, res) => {
  const { title, amount, category } = req.body;
  if (!title || !amount || !category) {
    return res.status(400).json({ error: 'Please provide title, amount, and category' });
  }
  res.status(201).json({ message: 'Expense received successfully!', receivedData: { title, amount, category } });
});

// Root Route
app.get('/', (req, res) => {
  res.send('Expense Tracker API Running');
});

// IMPORTANT: Error Middleware must always be the very LAST middleware!
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
