const express = require('express');
const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://wang:wang@dbh00.mlab.com:27007/cs503');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

const path = require('path');
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/',indexRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.use('/api/v1', restRouter);

app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})