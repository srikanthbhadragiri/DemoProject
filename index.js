const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('/', (req, res) => {
  console.log("log index.js page, ", __dirname);
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/demo1', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/sample1.html'))
});

app.get('/countries', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/sample2.html'))
});

app.get('/fullstack', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/fullstack.html'))
});

app.get('/img/srikanth.png', (req, res) => {
  res.sendFile(path.join(__dirname + '/img/srikanth.png'))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
