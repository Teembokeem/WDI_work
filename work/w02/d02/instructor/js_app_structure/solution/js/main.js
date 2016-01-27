console.log("main.js loaded!");

/* DATA MODEL */

/* BEHAVIOR */

/* VIEW RENDER */

var startCoverEl = document.createElement("div");

startCoverEl.id        = "start-cover";
startCoverEl.className = "cover cover-dark"
startCoverEl.innerHTML = `
  <h1 class="animated zoomIn">
    <span class="show-first infinite swing animated">Whack</span><br>
    <span class="show-second infinite swing animated">– a –</span><br>
    <span class="show-third infinite swing animated">molé!</span>
  </h1>
`;

var gameContainerEl = document.getElementById("game-container");
var boardEl         = document.getElementById("board");
var songEl          = document.getElementById("song");

var getCellEl = function(index) {
  return document.getElementById("cell" + index);
};

var createAvacadoEl = function() {
  var el = document.createElement("div");
  el.className = "avocado mole animated zoomIn";
  return el;
};

var createGuacEl = function() {
  var el = document.createElement("div");
  el.className = "guac mole animated zoomIn";
  return el;
};

var mash = function(avocadoEl) {
  avocadoEl.className = "guac mole";
};

var openWelcomeScreen = function() {
  gameContainerEl.insertBefore(startCoverEl, boardEl);
  getCellEl(0).appendChild(createAvacadoEl());
  getCellEl(8).appendChild(createGuacEl());
  songEl.play();
};

var closeWelcomeScreen = function() {
  startCoverEl.remove();
  getCellEl(0).children[0].remove();
  getCellEl(8).children[0].remove();
  songEl.pause();
};

/* INTERACTION and GAMEPLAY */

openWelcomeScreen();
setTimeout(closeWelcomeScreen, 3000);
