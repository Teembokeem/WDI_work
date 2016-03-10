console.log('main.js linked!');


// $.ajax({
//   url: 'http://localhost:3000/fishes/',
//   method: 'GET',
//   dataType: 'json'
// }).then(function(datas) {
//   console.log(datas)
// }, function(error) {
//   console.log(error);
// })

// $.get('http://localhost:3000/fishes/56de164573dd7b444fabfedd').then(function(data) {
//   console.log(data);
// }, function(error) {
//   console.log(error);
// })

// $.ajax({
//   url: "http://localhost:3000/fishes/56de164573dd7b444fabfedd",
//   method: 'PUT',
//   dataType: 'json',
//   data: {name: 'Minnow', category: 'Trash'}
// }).done(function(data) {
//   console.log(data);
// }, function(error) {
//   console.log(error);
// })

// var newFish = {
//   name: 'Hawaiian Shirt',
//   category: 'Clothing'
// };

// $.post('http://localhost:3000/fishes', newFish).done(function(data) {
//   console.log(data);
// })

// $.ajax({
//   url: 'http://localhost:3000/fishes/56de23ed87df874b4d832f93',
//   method: 'DELETE'}).done(function() {
//   console.log('done with that');
// })


$(function() {

  var $fishesUl = $('#fishes'),
      $newFishCategory = $('#fish-category'),
      $newFishName = $('#fish-name'),
      $divForm = $('#fish-form');

  function getFishes() {
    $.get('http://localhost:3000/fishes')
      .then(function(fishes) {
        fishes.forEach(addFish)
      }, function(err) {
        console.log(err);
      })
  }

  function addFish(fish, index) {
    var $fishItem = `<li>${fish.name} - <em>${fish.category}</em> - <button type="button" name='fish[name]' id=${index} placeholder="Edit">EDIT</button></li>
                     <input class="hidden" type="text" name='fish[name]' id="edit-fish-name${index}" placeholder=${fish.name}>
                     <select class="hidden" name="fish[category]" id="edit-fish-category${index}">
                       <option value="Fish">Fish</option>
                       <option value="Clothing">Clothing</option>
                       <option value="Corpse">Corpse</option>
                       <option value="Trash">Trash</option>
                     </select>
                     <button class="hidden" type="button" name='fish[name]' id=commit${index} placeholder="Edit">COMMIT</button>`;
    $fishesUl.append($fishItem);
    $(`#${index}`).on('click', function() {
      $(`#edit-fish-name${index}`).removeClass('hidden');
      $(`#edit-fish-category${index}`).removeClass('hidden');
      $(`#commit${index}`).removeClass('hidden').on('click', updateFish(fish, index));;
      $(`#${index}`).addClass('hidden')
     });
    $(`#commit${index}`).on('click', updateFish);
  }


  function postFishes() {
    var newFish = { name: $newFishName.val(),
                    category: $newFishCategory.val()
                  };
    $.post('http://localhost:3000/fishes/', newFish).done(function(data) {
      console.log(newFish);
    });
  }

  $('#add-fish').on('click', postFishes);

  function updateFish(fish, index) {
    console.log(fish, index);
    fish.name = $(`#edit-fish-name${index}`).val();
    console.log($(`#edit-fish-name${index}`).val());
    fish.category = $(`#edit-fish-category${index}`).val();
  }



  getFishes();
})


