const express = require('express');
const router = express.Router();
const userRoutes = require('./data.routes');

router.use('/chat-model-data', userRoutes);

module.exports = router;