console.log('main.js loaded!');

$(document).ready(function() {
  console.log('document loaded!');

  var $fancyList     = $('#fancy-list'),
      $templateEl    = $('#li-template'),
      templateString = $templateEl.html(),
      renderLi       = _.template(templateString);

  // the data is available on the global scope from the data.js file
  fancyData.forEach(function(item, i) {

    // this can be done in all CSS... check out the bottom of the
    // CSS file!
    item.extraClasses = "";
    if (i%3 == 0) {
      item.extraClasses = "wide";
    } else if ((i+1)%3 == 0) {
      item.extraClasses = "right";
    }

    renderedHtmlView  = renderLi(item);
    $fancyList.append(renderedHtmlView);
  });
});
