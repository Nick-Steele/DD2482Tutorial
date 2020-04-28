'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<html><body><h1>Congratulations! *Node.js Dev Environment 2 inside Docker!*</h1><img src="https://www.jquery-az.com/html/images/banana.jpg" alt="Banana" width="300" height="300"></body></html>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
