var express = require('express');
var router = express.Router();
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var childArgs = [
    path.join(__dirname, 'phantomjs-script.js'),
    'some other argument (passed to phantomjs script)'
  ];

  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    // handle results
  });

  res.send('respond with a resource');
});

module.exports = router;
