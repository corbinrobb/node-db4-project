const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('UP and RUNNING');
})

module.exports = server;