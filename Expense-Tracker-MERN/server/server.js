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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
