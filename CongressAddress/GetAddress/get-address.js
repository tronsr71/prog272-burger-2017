var fs=require("fs");
var debug = require('debug')('get-address');

debug('Testing debug');

function readFile(fileName, callback) {
  'use strict';
  if (!callback) {
    return new Promise(function(resolve, reject) {
      fs.readFile(fileName, 'utf8', function(err, fileContents) {
        if (err) {
          reject(err);
        }
        resolve({
          'result': fileContents
        });
      });
    });
  } else {
    fs.readFile(fileName, 'utf8', function(err, fileContents) {
      if (err) {
        throw (err);
      }
      callback({
        'result': fileContents
      });
    });
  }
}

// function getAddress(value, char) {
//   'use strict';
//   return value.substring(0, value.lastIndexOf(char) - 1);
// }

function getZip(value) {
  'use strict';
  return value.substring(value.lastIndexOf(' ') + 1, value.length);
}

function getCity(value) {
  'use strict';

  // first chopp off the zip code and preceding space
  const temp =  value.substring(0, value.lastIndexOf(' '));

  // now take the substring of the first 'W' and everything after it
  return temp.substring(value.lastIndexOf('W'));
}

function getEmail(first, middle, last, state) {
  'use strict';
  first = first.toLowerCase();
  last = last.toLowerCase();
  state = state.toLowerCase();

  if (middle !== '') {
    middle = middle.toLowerCase().substring(0,1);
    return first + '.' + middle + '.' + last + '@' + state + '.senate.gov'
  }
  else {
    return first + '.' + last + '@' + state + '.senate.gov'
  }
}

function writeIt(label, value, noComma) {
  var comma = noComma ? "'" : "',";
  console.log('\t' + label, "'" + value + comma)
};

readFile('address.json').then(function(text) {
  //debug(text);

  const unknown = 'unknown';
  var json = JSON.parse(text.result);
  //debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));

  for (var i = 0; i < json.objects.length; i++) {
    const fName = json.objects[i].person.firstname;
    const lName = json.objects[i].person.lastname;
    const mName = json.objects[i].person.middlename;
    const state = json.objects[i].state;

    console.log('{');
    writeIt('firstName:', fName);
    writeIt('lastName:', lName);
    writeIt('street:', json.objects[i].extra.office);
    writeIt('city:', getCity(json.objects[i].extra.address));
    writeIt('state:', state);
    writeIt('zip:', getZip(json.objects[i].extra.address));
    writeIt('phone:', json.objects[i].phone);
    writeIt('website:', json.objects[i].website);
    writeIt('email:', getEmail(fName, mName, lName, state));
    writeIt('contact:', json.objects[i].extra.contact_form || unknown, true);
    console.log('},');
  }
  //console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
  debug('all done');
});