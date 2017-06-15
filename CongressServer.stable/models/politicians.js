var mongoose = require('mongoose');

var politicianSchema = mongoose.Schema({
  'firstName': String,
  'lastName': String,
  'street': String,
  'city': String,
  'state': String,
  'zip': String,
  'phone': String,
  'website': String,
  'email': String,
  'contact': String
});

module.exports = mongoose.model('politician', politicianSchema);
