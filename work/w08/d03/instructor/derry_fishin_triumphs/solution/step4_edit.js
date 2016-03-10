// Step 1: Create editFish function (without $li - use id)
// Step 2: Create inline form (add $li to editFish function)
// Step 3: Add CSS for edit forms
// Step 4: Add $fishesUl = ul#fishes
// Step 5: Make event listener for edit button
// Step 6: Make event listener for cancel edit button
// Step 7: Make event listener for save edit button


var renderLi,
    $fishesUl;

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

function editFish($li, fish) {
  $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/fishes/' + $li.attr('id'),
      data: fish
    }).then(function(fish) {
      console.log("That fish gets bigger every time!");
      $li.find('span.name').html(fish.name);
      $li.find('span.category').html(fish.category);
      $li.removeClass('edit');
    });
}

$(function() {

  // attach ul#fishes
  $fishesUl = $('#fishes');
  // make template
  renderLi = _.template(`
    <li id="<%= _id %>">
      <span class="noedit name"><%= name %></span>
      <input class="edit name"/>
      <em><span class="noedit category"><%= category %></span></em>
      <input class="edit category"/>
      <span class="btn btn-danger btn-xs delete-fish">X</span>
      <span class="btn btn-info btn-xs noedit edit-entry">Edit</span>
      <span class="btn btn-success btn-xs edit save-edit">Save</span>
      <span class="btn btn-default btn-xs edit cancel-edit">Cancel</span>
    </li>
  `);

  $('form#new-fish').on('submit', postFish);

  $fishesUl.delegate('.edit-entry', 'click', function() {
    var $li = $(this).closest('li');
    $li.find('input.name').val($li.find('span.name').html());
    $li.find('input.category').val($li.find('span.category').html());
    $li.addClass('edit');
  });

  $fishesUl.delegate('.cancel-edit', 'click', function() {
    $(this).closest('li').removeClass('edit');
  });

  $fishesUl.delegate('.save-edit', 'click', function() {
    var $li = $(this).closest('li');

    var fish = {
      name:     $li.find('input.name').val(),
      category: $li.find('input.category').val()
    };

    editFish($li, fish);
  });

  // fill ul#fishes
  getFishes();
});
