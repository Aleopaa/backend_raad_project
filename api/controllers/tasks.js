const Task = require('../models/task')

async function index (req, res) {
    try {
        const tasks = await Task.all;
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({err})
    }
}

module.exports = {
    index
}
