console.log("main.js loaded!");

/*
 * ELEMENTS FROM THE PAGE
 */

var numCharactersEl = document.getElementById("num-typed");
var textareaEl      = document.getElementById("textarea");
var tweetFormEl     = document.getElementById("tweet-box");
var tweetButtonEl   = document.getElementById("tweet-button");
var tweetListEl     = document.getElementById("posted-tweets");

/*
 * ACTION HANDLERS
 */

var typing = function (event) {
  // get the number of characters in the text area
  var numberOfCharactersTyped = textareaEl.value.length;

  // update the text of the "Characters typed" element
  numCharactersEl.textContent = "Characters typed: " + numberOfCharactersTyped;

  // if the characters number is greater than 0 and
  // less than or equal to 140
  if (numberOfCharactersTyped > 0 && numberOfCharactersTyped <= 140) {
    // enable the button and remove the class .error (look at the CSS!)
    tweetButtonEl.disabled = false;
    textareaEl.classList.remove("error");

    if (event.keyCode === 13) {
      tweet();
    }
  } else {
    // Disable the button and add the class .error (look at the CSS!)
    tweetButtonEl.disabled = true;
    textareaEl.classList.add("error");
  }
};

var tweet = function (event) {
  console.log("Tweet: " + textareaEl.value);

  var newTweetEl = document.createElement("li");
  newTweetEl.textContent = textareaEl.value;
  tweetListEl.appendChild(newTweetEl);

  // If tweet was called by an event listener, it is passed an Event
  // object. If that is the case, prevent its default action! The
  // default action for form submission is to reset the page.
  if (event) {
    event.preventDefault();
  }

  // Clear the text area.
  textareaEl.value = "";

  // Disable the button and add the class .error (look at the CSS!)
  tweetButtonEl.disabled = true;
  textareaEl.classList.add("error");
};

/*
 * EVENT LISTENERS
 */

// Have the textarea listen for typing events
textareaEl.addEventListener("keyup", typing);

// Use the 'submit' event on the form that contains the inputs,
// instead of the 'click' event for the submit button itself.
// This will capture a 'click' of the submit button AND a 'return'
// keypress in other inputs (not text areas, however). It also lets
// us stop the form from refreshing the page.

// tweetButtonEl.addEventListener("click", tweet);
tweetFormEl.addEventListener("submit", tweet);
