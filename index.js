const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(express.static('assets'));

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

app.get('/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname + '/assets/plugins/bootstraps/css/bootstrap.min.css'))
});

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname + '/assets/css/styles.css'))
});

// app.get('/bootstrap.min.css', (req, res) => {
//   res.sendFile(path.join(__dirname + '/assets/plugins/bootstraps/js/bootstrap.min.js'))
// });
//
// bootstrap.min.css
// styles.css
// jquery-3.2.1.min.js
// popper.min.js
// back-to-top.js
// jquery.scrollTo.min.js
// jquery.easypiechart.min.js
// bootstrap.min.js
// sri.jpg
// main.js
// back-to-top.js
// jquery.scrollTo.min.js
// jquery.easypiechart.min.js
// main.js
// bootstrap.min.css
// styles.css



const PORT = process.env.PORT || 5000;

app.listen(PORT);
