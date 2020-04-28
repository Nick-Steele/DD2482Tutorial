'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<html><body><h1>Congratulations! *Node.js webb app straight from a Docker container*</h1><img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="Flamingo" width="300" height="300"> </body></html>');

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
