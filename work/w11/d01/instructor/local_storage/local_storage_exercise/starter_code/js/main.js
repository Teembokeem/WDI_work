var $form, $input, $memoriesList;

$(document).ready(function() {
  $form         = $('form');
  $input        = $('input');
  $memoriesList = $('#memories-list');

  $form.on('submit', function(evt) {
    evt.preventDefault();

    var memory = $input.val();

    if (memory) {
      console.log('Memory submitted:', memory);
      renderMemory(memory);
      $input.val('');
    }
  });

  function renderMemory(memory) {
    var $memoryEl = $('<tr>').append($('<td>').text(memory));
    $memoryEl.appendTo($memoriesList);
  }
});
