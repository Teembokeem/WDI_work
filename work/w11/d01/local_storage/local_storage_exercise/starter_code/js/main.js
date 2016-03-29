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
      add2Memory(memory);
      renderMemory(memory);
      $input.val('');
    }
  });

  if (localStorage.pensieve) {
    getMemories();
  };

  $('#clear-all').on('click', removeAll)

  $memoriesList.on('click', '.remove', function(evt) {
    var $delMem = $(this).closest('tr');
    console.log("removing memory", $delMem.text().slice(0, -1));
    $delMem.remove()
    removeMemory($delMem.text().slice(0, -1))
  } )

});

function renderMemory(memory) {
  var $delButton = $('<span class="remove">X</span>');
  var $memoryEl = $('<tr>').append($('<td>').text(memory).append($delButton));
  $memoryEl.appendTo($memoriesList);
}

function add2Memory(memory) {
  if (localStorage.pensieve === undefined) {
    localStorage.setItem("pensieve", "[]");
  }
  var pensieve = JSON.parse(localStorage.pensieve)
  pensieve.push(memory);
  if (JSON.parse(localStorage.pensieve).length !== pensieve.length) {
    localStorage.setItem("pensieve", JSON.stringify(pensieve));
  }
}

function getMemories() {
  var memories = JSON.parse(localStorage.pensieve);
  memories.forEach(memory => {
    renderMemory(memory);
  });
};

function removeAll() {
  console.log("clearing local storage!!");
  localStorage.clear(); // localStorage.removeItem("pensieve");
  $memoriesList.empty();
}

function removeMemory(trMemory) {
  var pensieve = JSON.parse(localStorage.pensieve);
  var ind = pensieve.indexOf(trMemory);
  pensieve.splice(ind, 1);
  if (JSON.parse(localStorage.pensieve).length !== pensieve.length) {
    localStorage.setItem("pensieve", JSON.stringify(pensieve));
  }
}



