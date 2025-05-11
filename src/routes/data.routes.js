const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');

router.get('/get-data', dataController.getDataSet);

module.exports = router;