console.log("JS loaded.");


// battle

var turnCount = 0;
var p1Populate = [];
var p2Populate = [];
var celFindEl = document.querySelectorAll('.cel');

var player1Turn = function () {
  event.target.style.backgroundImage = "url('http://i.imgur.com/4FUmM8H.jpg')";
    turnCount++;
    console.log("are you there");
    console.log(turnCount);
    p1Populate.push(event.target.id);
}

var player2Turn = function () {
  event.target.style.backgroundImage = "url('http://i.imgur.com/CPbDVo4.jpg')";
  turnCount++;
  console.log("are you here");
  console.log(turnCount);
  p2Populate.push(event.target.id);
}

var stopListening = function() {
  event.target.removeEventListener("click", addImg1, false);
}

 var addImg1 = function () {
  if (turnCount%2 === 0 && turnCount <9) {
    player1Turn();
    stopListening();
    winsBy("Player1", p1Populate);
  } else if (!turnCount%2 === 0 && turnCount < 9) {
    player2Turn();
    stopListening();
    winsBy("Player2", p2Populate);
  } else {
    console.log("error");
  }
}

for (var i=0; i < celFindEl.length; i++) {
  celFindEl[i].addEventListener("click", addImg1, false);
};

// win condition
var winCheck = function(person, cel1, cel2, cel3) {
  if (person.indexOf(cel1) !=-1 && person.indexOf(cel2) != -1 && person.indexOf(cel3) != -1) {
    return true;
  } else {
    return false;
  }
}

function pageScroll() {
      window.scrollBy(0,50); // horizontal and vertical scroll increments
      scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}


var displayStuffWins = function(who) {
  if (who === "Player1") {
    document.getElementById('ezradoe').style.visibility = "visible";
    document.getElementById('ezra_you_dog_you').style.visibility = "visible";
  } else if (who !== "Player1") {
    document.getElementById('ceradoe').style.visibility = "visible";
    document.getElementById('cera_wtf').style.visibility = "visible";
  }
}
var winsBy = function (player, person) {
  if (winCheck(person, "cel1", "cel2", "cel3") || winCheck(person, "cel4", "cel5", "cel6") || winCheck(person, "cel7", "cel8", "cel9")) {
    console.log(player + "wins by row");
    displayStuffWins(player);
    console.log("loaded");
  } else if (winCheck(person, "cel1", "cel4", "cel7") || winCheck(person, "cel2", "cel5", "cel8") || winCheck(person, "cel3", "cel6", "cel9")) {
    console.log(player + "wins by column!");
    displayStuffWins(player);
  } else if (winCheck(person, "cel1", "cel5", "cel9") || winCheck(person, "cel3", "cel5", "cel8")) {
    console.log(player + "wins by diagonal!");
    displayStuffWins(player);
  } else if (turnCount=== 9) {
    console.log("it's a tie");
  }
};

/*document.createElement("div")
  document.textContent
  document.appendChild.body
*/

// reset button

function clearForm() {
  for (var i=0; i < celFindEl.length; i++) {
    celFindEl[i].style.backgroundImage ='';
    celFindEl[i].addEventListener("click", addImg1, false);
}
  turnCount = 0;
  var p1Populate = [];
  var p2Populate = [];
  console.log('worked');
}







