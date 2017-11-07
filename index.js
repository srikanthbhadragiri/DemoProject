const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('/', (req, res) => {
  console.log("log index.js page, ", __dirname);
  res.sendFile(path.join(__dirname + '/welcome.html'));
});

app.get('/demo1', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/sample1.html'))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
