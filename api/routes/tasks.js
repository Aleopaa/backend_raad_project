const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks')

router.get('/', taskController.index);

module.exports = router;
