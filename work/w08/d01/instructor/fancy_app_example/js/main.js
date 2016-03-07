console.log('main.js loaded!');

$(document).ready(function() {
  console.log('document loaded!');
  var $destination,
      $templateEl,
      renderLi,
      renderedHtmlView,
      fancyThings;

  // CACHE DOM REFERENCES

  // Step 1: get a reference to where we
  // insert the templated code.
  $destination = $('#fanciness');

  // Step 2: get a reference to the actual
  // "Underscore"-syntax template on the
  // page.
  $templateEl  = $('#li-template');

  // CREATE HELPER FUNCTIONS

  // Step 3: generate the render function by
  // passing the template to Underscore's
  // template method.
  renderLi = _.template($templateEl.html());

  // RENDER!

  // Step 4: ensure that you have data to
  // pass in to the template with the
  // render function.
  fancyThings = [
    {
      name: "Lulu Lemon tights",
      link: "https://goo.gl/K9vab5"
    }, {
      name: "Long-haired cats",
      link: "http://goo.gl/10UWsD"
    }, {
      name: "Express t-shirts",
      link: "http://goo.gl/CYi7rM"
    }, {
      name: "Mazda Miatas",
      link: "http://goo.gl/KQySTE"
    }, {
      name: "The Cheesecake Factory",
      link: "http://goo.gl/dC4no7"
    }
  ];

  fancyThings.forEach(function(thing) {

    // Step 5: render, or generate the HTML,
    // for the given data.
    renderedHtmlView = renderLi(thing);

    // Step 6: append the generated (rendered)
    // HTML to the DOM at the given insertion
    // point.
    $destination.append(renderedHtmlView);
  });
});
