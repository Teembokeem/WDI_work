var renderLi,
    $fishesUl,
    $liTemplate;


function postFish(e){
  e.preventDefault();

  // our API uses JSON, so we need to make a javascript object! There are a lot
  // of ways to do this, this just a basic example.
  var fish = {
    category: $('form#new-fish select#fish-category').val(),
    name: $('form#new-fish input#fish-name').val()
  };

  // create a new AJAX request
  $.post('http://localhost:3000/fishes', fish)
    .then(function(fish){
      console.log(fish);
      addFish(fish);
    });


  // clear our input box!
  $('form#new-fish input#fish-name').val(null)
}

function getFishes(){
  var fishes = $.get('http://localhost:3000/fishes')
    .then(function(fishes){
      fishes.forEach(function(fish){
        addFish(fish);
      });
    });
}

function addFish(fish) {
  $fishItem = $(renderLi(fish));
  $fishItem.find('span.delete-fish').on('click', function(e) {
    var deleteId = $(this).parent().attr('id');
    deleteFish(deleteId);
  })
  $("ul#fishes").prepend($fishItem);
}

function deleteFish(id) {
  $('#' + id).remove();
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/fishes/' + id
  }).then(function(data) {
    console.log(data);
  });
}

function editFish($li, fish) {
  $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/fishes/' + $li.attr('id'),
      data: fish
    }).then(function(fish) {
      $li.find('span.name').html(fish.name);
      $li.find('span.category').html(fish.category);
      $li.removeClass('edit');
    });
}

// JQuery
$(function() {
  console.log("Let's get fishin'!");

  $fishesUl   = $('#fishes');
  $liTemplate = $('#li-template');
  renderLi    = _.template($liTemplate.html());

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

  getFishes();
});
