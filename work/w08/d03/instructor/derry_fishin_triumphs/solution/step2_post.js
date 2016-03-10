// step 1: postFish function - post to db
// step 2: create submit listener
// step 3: add preventDefault to postFish

var renderLi;

function getFishes() {
  var fishes = $.get('http://localhost:3000/fishes')
  .then(function(fishes) {
    fishes.forEach(function(fish) {
      addFish(fish);
    });
  }, function(err) {
    console.log(err);
  });
}

function addFish(fish) {
  var $fishItem = $(renderLi(fish));
  $('ul#fishes').prepend($fishItem);
}

function postFish(evt) {
  evt.preventDefault();

  var fish = {
    category: $('select#fish-category').val(),
    name:     $('input#fish-name').val()
  };

  $.post('http://localhost:3000/fishes', fish)
    .then(function(fish) {
      console.log("Reeling in ", fish);
      addFish(fish);
    }, function(err) {
      console.log(err);
    });

  // clear our input box!
  $('input#fish-name').val(null);
}

$(function() {
  // make template
  renderLi = _.template(`
    <li id="<%= _id %>">
      <span><%= name %></span> -
      <em><span><%= category %></span></em>
    </li>
  `);

  // add listener on submit
  $('form#new-fish').on('submit', postFish);

  // fill the ul#fishes
  getFishes();
});
