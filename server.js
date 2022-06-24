const app = require("express")();
const cors = require('cors')

app.use(cors());


const taskRoutes = require('./routes/tasks')

app.get('/tasks', (req,res) => res.send(`Welcome to app`))

module.exports = app;
