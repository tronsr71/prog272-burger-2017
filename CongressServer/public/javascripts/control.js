$(document).ready(function() { 'use strict';
  var insertUrl = '/insertValidCollection';

  function insertCollection() {
    var jqxhr = $.get(insertUrl, function(result) {
      alert( "success" );
      console.log(JSON.stringify(result, null, 4));
    })
      .done(function() {
        console.log( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        console.log( "finished" );
      });
  }

  $('#insertValidData').click(insertCollection);

  function getAll() {
    $.getJSON('/all-data', function(result) {
      collection = result.allData;
      $('#display').html(JSON.stringify(result, null, 4));
    })
      .done(function() {
        console.log('second success');
      })
      .fail(function(error) {
        alert(JSON.stringify(error.responseJSON, null, 4));
      })
      .always(function() {
        console.log('finished');
      });
  }

});

// Adding a random comment on June 07 @ 1:15pm so I can see a difference
// when issuing 'git status'



// $(document).ready(function() { 'use strict';
//   var insertUrl = '/insertValidCollection';
//
//   function insertCollection() {
//     var jqxhr = $.get(insertUrl, function(result) {
//       alert( "success" );
//       console.log(JSON.stringify(result, null, 4));
//     })
//       .done(function() {
//         console.log( "second success" );
//       })
//       .fail(function() {
//         alert( "error" );
//       })
//       .always(function() {
//         console.log( "finished" );
//       });
//   }
//
//   $('#insertValidData').click(insertCollection);
//
//   $("#getAll").click(function() {
//     $.getJSON('/all-data', function(result) {
//       router.get('/bar', function(request, response) {
//         response.status(200).send({result: 'bar'});
//       });
//       $('#display').html(JSON.stringify(result, null, 4));
//       router.get('/bar', function(request, response) {
//         response.status(200).send({result: 'bar'});
//       });
//     });
//   });
// });
//
