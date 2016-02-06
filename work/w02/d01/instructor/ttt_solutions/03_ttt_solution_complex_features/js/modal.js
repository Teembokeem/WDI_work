(function(window, $) {
  console.log("modal.js loaded…");

  var modal = {},
      active = false,  // <- Variables available to both methods via a
      $modal,          // closure. Since the methods rely upon shared
      $cover,          // references, and since we don't want the
      animateInClass,  // program to accidentally effect that data btwn
      animateOutClass; // function calls, we should use closures…

  // When it doesn't matter if the user edits the data between calls to
  // .open and .close, we can make data available within the owning
  // object (context) as a property. This also allows the user to change
  // this "setting."
  modal.backgroundColor = "#D3D3D3";

  /*
   * modal.open
   */
  modal.open = function($modalPassed, dimBackground, animateInPassed, animateOutPassed) {
    if (active) return;
    active = true;

    $modal          = $modalPassed.clone(); // Copies, not references.
    animateInClass  = animateInPassed;      // Copies, not references.
    animateOutClass = animateOutPassed;     // Copies, not references.

    $cover = $("<div>", {id: "modal-body-cover"})
      .css({
        width:           "100%",
        height:          "100%",
        position:        "fixed",
        top:             0,
        left:            0,
        backgroundColor: modal.backgroundColor,
        opacity:         0,
        display:         "none" // Will fade in…
      });

    if (dimBackground) {
      $cover.css({opacity: 0.75});
    }
    $cover.appendTo($body).fadeIn();

    if (animateInClass) {
      $modal.addClass(animateInClass);
    }
    $("body").append($modal);
  };

  /*
   * modal.close
   */
  modal.close = function() {
    if (!active) return;
    active = false;

    if (animateOutClass) {
      $modal.removeClass(animateInClass);
      $modal.addClass(animateOutClass);
      setTimeout(function() {
        $modal.remove();
      }, 1000);               // Assuming the animation takes 1 second.
    } else {
      $modal.remove();
    }

    $cover.fadeOut(1000, function() {
      $cover.remove();
    });
  };

  /*
   * Attach the modal object to the global context, and set the
   * reference to the body for after the DOM content is loaded.
   */
  window.modal = modal;

  $(function() {
    $body = $("body");
  });

})(window, jQuery);
