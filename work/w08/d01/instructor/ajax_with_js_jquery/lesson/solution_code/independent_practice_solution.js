$(function() {

// Get a single fish and spit out the JSON collection in the console
// var ajax = $.get('http://localhost:3000/fishes')
//   .done(function(data){
//     console.log(data);
//   });

// Use the more generic $.ajax to do the same request
$.ajax({
  url: 'http://localhost:3000/fishes',
  method: 'GET', // GET by default
  dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
}).done(function(data){
  console.log(data);
});

// type: is an alias for method.
// You should use type if you're using versions of jQuery prior to 1.9.0.

// Modify that fish by changing it's name and category
$.ajax({
  url: 'http://localhost:3000/' // + id,
  method: 'PUT',
  dataType: 'json',
  data: {name: "Minnow"},
}).done(function(data){
  console.log(data);
});

// Add a new fish to the list with name and category
var fish = {
  name: "Hawaiian Shirt",
  category: "Clothing"
};

$.post('http://localhost:3000/fishes', fish)
  .done(function(data){
    console.log("Fish was added");
});

// Delete a fish from the list
$.ajax({
  type: 'DELETE',
  url: 'http://localhost:3000/fishes/' // + id
}).done(function(data) {
  console.log(data);
});

});
