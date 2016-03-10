// step 1: create template within doc.ready
// step 2: addFish function - prepend one fish to ul#fishes
// step 3: get all fishes from db and prepend all
// step 4: call getFishes() within doc.ready

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

$(function() {
  // make template
  renderLi = _.template(`
    <li id="<%= _id %>">
      <span><%= name %></span> -
      <em><span><%= category %></span></em>
    </li>
  `);

  // fill the ul#fishes
  getFishes();
});
