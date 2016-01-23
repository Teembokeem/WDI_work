console.log("main.js loaded!");

var numTypedEl = document.getElementById('num-typed')

var typeAction = function () {
  console.log(textareaEl.value.length);
  numTypedEl.textContent = "Characters Typed: " + textareaEl.value.length
};

var textareaEl =
    document.getElementById("textarea");

textareaEl.addEventListener("keyup", typeAction)
