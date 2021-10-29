const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router');
server.use(express.json());

// Build your actions router in /api/actions/actions-router.js
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Hello from Server.js</h1>
    `)
})
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
