'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var http = require('http');
var path = require('path');


var app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
