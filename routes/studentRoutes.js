// routes.js
const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
  res.send('Hello from routes!');
});

module.exports = app;
