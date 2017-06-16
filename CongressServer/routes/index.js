var express = require('express');
var router = express.Router();
var allMongo = require('./all-mongo');
var connect = require('./connect');
//var politicians = require('../models/politicians');

/* GET home page. */
router.get('/', function(req, res, next) {
  'use strict';
  //res.render('index', {title: 'CongressServer'});

  // use this after doing 'npm run build'
  res.loadFile('index.html');

});


function checkConnection(response, callback) {
  if (!connect.connected) {
    connect.doConnection('mlab', (err) => {
      if (err) {
        response.status(500).send({error: err});
        callback(false);
        return;
      }
    });
  }
  callback(true);
}

router.get('/admin', function(req, res) {
  'use strict';
  res.render('index', {title: 'CongressServer'});
});

router.get('/all-data', function(request, response) {
  'use strict';
  console.log('AllData route invoked.');
  checkConnection(response, (result) => {
    if (result) {
      console.log('Calling allMongo.getAllData');
      allMongo.getAllData(response);
    }
  });
});

router.get('/emptyCollection', function(request, response) {
  'use strict';
  checkConnection(response, (result) => {
    if (result) {
      console.log('Calling allMongo.empty');
      allMongo.empty(response);
    }
  });
});

router.get('/insertValidCollection', function(request, response) {
  'use strict';
  console.log('Insert Valid Collection Called.');
  //response.status(200).send({result: 'Insert valid Collection'});
  checkConnection(response, (result) => {
    if (result) {
      console.log('Calling allMongo.readDataAndInsert');
      allMongo.readDataAndInsert(response);
    }
  });
});

router.get('/:id', function(request, response) {
  'use strict';
  response.status(200).send({ result: request.params.id });
});

module.exports = router;
