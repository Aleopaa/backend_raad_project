const router = require('express').Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.all
        res.status(200).json({data: tasks})
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err })
    }
});

module.exports = router
