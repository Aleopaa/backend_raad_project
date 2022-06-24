const app = require("express")();
const cors = require('cors')

app.use(cors());


const taskRoutes = require('./routes/tasks')

app.get('/', (req,res) => res.send(`Welcome to app`))

module.exports = app;
