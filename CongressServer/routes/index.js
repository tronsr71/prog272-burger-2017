var express = require('express');
var router = express.Router();
//var politicians = require('../models/politicians');
var allMongo = require('./all-mongo');
var connect = require('./connect');
// var connrouter.get('/bar', function(request, response) {
//   response.status(200).send({result: 'bar'});
// });
// ect = require('./connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  'use strict';
  res.render('index', {title: 'CongressServer'});

  // use this after doing 'npm run build'
  //res.loadFile('index.html);

});

function checkConnection() {
  if (!connect.connected) {
    connect.doConnection('mlab');
  }
}

router.get('/all-data', function(request, response) {
  'use strict';
  console.log('All Data route invoked.');
  checkConnection();
  allMongo.getAllData(response);
});

router.get('/emptyCollection', function(request, response) {
  'use strict';
  checkConnection();
  //response.status(200).send({result: 'empty'});
  allMongo.empty(response);
});

router.get('/insertValidCollection', function(request, response) {
  'use strict';
  console.log('Insert Valid Collection Called.');
  //response.status(200).send({result: 'Insert valid Collection'});
  checkConnection();
  allMongo.readDataAndInsert(response);
});

// router.get('/bar', function(request, response) {
//   response.status(200).send({result: 'bar'});
// });
//
// router.get('/bar/:id', function(request, response) {
//   'use strict';
//   response.status(200).send({param: request.params.id});
// });

router.get('/:id', function(request, response) {
  'use strict';
  response.status(200).send({ result: request.params.id });
});

module.exports = router;