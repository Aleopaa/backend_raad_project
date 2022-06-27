const express = require('express')
const cors = require('cors')

const server = express();
server.use(cors());
server.use(express.json())

const taskRoutes = require('./routes/tasks')

server.use('/tasks', taskRoutes)

server.get('/', (req,res) => res.send(`Welcome to server`))

module.exports = server;
