const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Backend is healthy and running smoothly!',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
