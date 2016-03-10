console.log('main.js loaded!');

var $visitor,
    $host,
    $visitorButtons,
    $eventButton,
    $callbackButton,
    $promiseButton,
    $seatButton,
    $seatMessage,
    $buzzerButton,
    $buzzerOption;

/*
 * Helper functions for enabling or disabling
 * chunks of the UI. They will be used by the
 * events, callbacks and promises below.
 */

var toggleDisabled = function($el) {
  if ($el.hasClass('disabled')) {
    $el.removeClass('disabled')
       .find('input, button')
       .removeAttr('disabled');
    // console.log('enabling!', $el.get());
  } else {
    // console.log('disabling!', $el.get());
    $el.addClass('disabled')
       .find('input, button')
       .attr('disabled', 'disabled');
  }
};

var toggleAllDisabled = function($els) {
  $els.forEach(toggleDisabled);
};

var showBuzzer = function() {
  $buzzerOption.removeClass('hidden');
};

var checkBuzzer = function() {
  console.log('  - The promise is pending.', buzzer);
  alert('Buzzer is pending…');
};

var flashBuzzer = function() {
  $buzzerButton.addClass('flash');
  $buzzerButton.text('Return Buzzer');
};

var hideBuzzer = function() {
  $buzzerOption.addClass('hidden');

  // Reset the buzzer element's original state.
  $buzzerButton.removeClass('flash');
  $buzzerButton.text('Check Buzzer');
  $buzzerButton.off();
  $buzzerButton.on('click', checkBuzzer);

  // Reset the visitor/host state.
  toggleAllDisabled([$visitor, $host]);
};

/*
 * Document on-ready event. This is necessary
 * because we are doing DOM interaction. Usually
 * I (Phil) put this at the bottom. I'm putting
 * it here to highlight all the async functions
 * at the bottom of the page.
 */

$(document).ready(function() {
  $visitor = $('.visitor');
  $host    = $('.host');

  $visitorButtons = $('.option:not(.seat):not(.buzzer) button');
  $eventButton    = $('.event > button');
  $callbackButton = $('.callback > button');
  $callbackInput  = $('.callback > input');
  $promiseButton  = $('.promise > button');

  $seatButton     = $('.seat > button');
  $seatMessage    = $('.seat .message');

  $buzzerButton   = $('.buzzer > button');
  $buzzerOption   = $('.buzzer');

  // Disable the Host side when we begin…
  toggleDisabled($host);

  // Clicking any of the buttons on the Visitor
  // side toggle's the disabled state.
  $visitorButtons.on('click', function(e) {
    toggleAllDisabled([$visitor, $host]);
  });

  // Attach the examples below to the Visitor
  // buttons…
  $eventButton.on('click',    beginListening);
  $callbackButton.on('click', setCallbacks);
  $promiseButton.on('click',  createPromise);

  $buzzerButton.on('click', checkBuzzer);
});


/*
 * Async structures initiated by button clicks!
 * They are, in order:
 *   - event listeners,
 *   - callbacks,
 *   - promises.
 */

// Listening for events…
function beginListening() {
  console.log('Attaching new listener.');
  $seatButton.on('click', function(e) {
    console.log('  - Triggering listener.');

    alert('"Will the party please come to the register…"');
    toggleAllDisabled([$visitor, $host]);

    console.log('  - Removing listener.');
    $seatButton.off();
  });
};


// Passing callbacks to outside processes…
function setCallbacks() {
  var phoneNumber,
      countdown,
      count;

  // Store the phone number and clear the
  // input with the number.
  phoneNumber = $callbackInput.val();
  $callbackInput.val('');

  // Disable the Seating button, since we
  // are passing (inverting) control to an
  // outside party with the callback. Also begin
  // visual countdown.
  $seatButton
    .attr('disabled', 'disabled')
    .addClass('disabled');
  count = 5;
  $seatMessage.text(count);

  console.log('Setting callbacks.');

  // setInterval passes (inverts) control to an
  // internal repeating timer, that calls the
  // callback on a regular interval.
  countdown = setInterval(function() {
    console.log('  - Calling interval callback.');
    count--;
    $seatMessage.text(count);
  }, 1000);

  // setTimeout passes (inverts) control to an
  // internal timer that calls the callback after
  // a certain period of time.
  setTimeout(function() {
    console.log('  - Calling timeout callback.');

    var alertMessage =
      "RING RING!!! Calling " + phoneNumber + "…\n" +
      "Your table is ready!";

    // End the countdown interval process from
    // above.
    clearInterval(countdown);
    $seatMessage.text('');

    // Reset the phone number closure variable.
    phoneNumber = null;

    alert(alertMessage);
    toggleAllDisabled([$visitor, $host]);

    // Reset (enable) the Seating button; as the
    // section as a whole is disabled, it won't
    // change it's status, but it will work next
    // time the section is enabled.
    $seatButton
      .removeAttr('disabled')
      .removeClass('disabled');
  }, 5000);
};


// Receiving a promise object…
var buzzer;
function createPromise() {
  console.log('Creating global object buzzer, a promise.');

  buzzer = new Promise(function(resolve) {
    // Setting a click listener that will fulfill
    // the promise.
    $seatButton.on('click',function(e) {
      resolve('Hurry back!');
      $seatButton.off();
    });
  });

  showBuzzer();

  // Chaining actions to happen after the
  // buzzer has been settled (fulfilled or
  // rejected).
  buzzer
    .then(function(message) {
      console.log('  - The promise has been fulfilled.', buzzer);
      flashBuzzer();
      return message;
    })
    .then(function(message) {
      alert(message);
    })
    .then(function() {
      // Remove the check buzzer listener, and add
      // the hide button listener.
      $buzzerButton.off();
      $buzzerButton.on('click', hideBuzzer);
    });
};
