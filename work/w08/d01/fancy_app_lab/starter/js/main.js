console.log('main.js loaded!');

$(document).ready(function() {
  console.log('document loaded!');

  var $destination,
      $templateDiv,
      renderDiv,
      renderedHtmlView,
      fancyThings;





  $destination = $('.fancy-feed');
  $templateDiv = $('#template');
  $divsize = $('.fancy-item');
  renderDiv = _.template($templateDiv.html());

  fancyData.forEach(function(thing, key) {
    var $item = $(renderDiv(thing));
    if (key % 3 == 0) {
      $item.find("img").addClass('full-width');
    }
    $destination.append($item);
  });


