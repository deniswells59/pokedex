'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
  var indexPath = path.join(__dirname, '../public/html/layout.html');
  res.sendFile(indexPath);
});

module.exports = router;
