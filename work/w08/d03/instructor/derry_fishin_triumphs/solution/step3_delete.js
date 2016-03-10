// step 1: add X button
// step 2: delete function
// step 3: add listener in addFish function

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
  $fishItem.find('span.delete-fish').on('click', function(evt) {
    var deleteId = $(this).parent().attr('id');
    deleteFish(deleteId);
  });
  $('ul#fishes').prepend($fishItem);
}

function deleteFish(id) {
  $('#' + id).remove();

  $.ajax({
    method: 'DELETE',
    url: 'http://localhost:3000/fishes/' + id
  }).then(function(msg) {
    console.log(msg);
  }, function(err) {
    console.log(err);
  })
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
      <span class="btn btn-danger btn-xs delete-fish">X</span>
    </li>
  `);

  $('form#new-fish').on('submit', postFish);

  // fill ul#fishes
  getFishes();
});
