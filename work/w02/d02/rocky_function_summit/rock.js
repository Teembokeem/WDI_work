console.log("worked!");


var arrayToString = function(numbers) {
  return numbers.join();
};

var esrever = function(reverseMe) {
  return reverseMe.split("").reverse().join("");
};


var words = ["apple", "Zardoz", "crap"];

var alphabetize = function(words) {
  return words.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}


function testEven(n) {
  if (n%1 !==0) {return false}
  else if (n%2 ===0) {return true};
}

items = [];
items.push({a: "b", c: "d"});

function greet(name) {
  if (name === "Robin Hood") {
    return "Hi Papi :^*";
  } else {
    console.log(name + "Hello");
  }
}


var sumItUp = function(num) {
  var sum =num;
  for (var i = 0; i < num; i++) {
     sum+=i;
  }
  return sum;
}
var a= ["kettle", "Mr. purpur",];
var b= ["spot", "frank", "handsome"];

var allPets = function(kitties, puppies) {
 return a.concat(b);
}

var inNeedofHugs = [3,7,'2',4];
var hugs = function(inNeedofHugs) {
  for (i=0 ; i<4 ; i++) {
    if(inNeedofHugs[i] === '2') {
      inNeedofHugs.push("('" + inNeedofHugs[i] + "')");
    } else {
      inNeedofHugs.push("(" + inNeedofHugs[i] + ")");
    console.log(inNeedofHugs);
    }
  }
  while (inNeedofHugs.length !=4) {
    inNeedofHugs.shift();
   console.log(inNeedofHugs);
  }
  return inNeedofHugs.join("");
}
