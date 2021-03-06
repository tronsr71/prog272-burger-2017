$(document).ready(function() { 'use strict';
  const insertUrl = '/insertValidCollection';
  let collection;

  function insertCollection() {
    var jqxhr = $.get(insertUrl, function(result) {
      alert( "insert successful" );
      console.log(JSON.stringify(result, null, 4));
    })
      .done(function() {
        console.log( "insertCollection success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        console.log( "finished" );
      });
  }


  function getAll() {
    $.getJSON('/all-data', function(result) {
      collection = result.allData;
      $('#display').html(JSON.stringify(result, null, 4));
    })
      .done(function() {
        console.log('getAll success');
      })
      .fail(function(error) {
        alert(JSON.stringify(error.responseJSON, null, 4));
      })
      .always(function() {
        console.log('finished');
      });
  }

  function emptyCollection() {
    $.getJSON('/emptyCollection', function(result) {
      $('#display').html(JSON.stringify(result, null, 4));
    })
      .done(function() {
        console.log('emptyCollection success');
      })
      .fail(function() {
        alert(JSON.stringify(a.responseJSON, null, 4));
      })
      .always(function() {
        console.log('finished');
      });
  }

  function update() {
    console.log(collection);
    if (collection !== undefined && collection.length !== 0) {
      collection[0].firstName = 'foo';
      const newData = {
        id: collection[0]._id,
        firstName: collection[0].firstName
      };
      $.getJSON('/update', newData, function(result) {
        $('#display').html(JSON.stringify(result, null, 4));
      })
        .done(function() {
          console.log('update success');
        })
        .fail(function() {
          alert(JSON.stringify(a.responseJSON, null, 4));
        })
        .always(function() {
          console.log('finished');
        });
    }
    else {
      console.log('Collection is empty, cannot update');
    }
  }


  $('#insertValidData').click(insertCollection);
  $('#getAll').click(getAll);
  $('#emptyCollection').click(emptyCollection);
  $('#update').click(update);


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
