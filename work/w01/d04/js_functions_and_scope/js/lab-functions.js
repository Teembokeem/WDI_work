console.log("Working!");

//1.

/*Define a function, as a function declaration, maxOfTwoNumbers that takes two
numbers as arguments and returns the largest of them. If they are the same, return that number. Use
the if-then-else construct.*/

function maxOfTwoNumbers(x, y) {
  return x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

//2.

// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and
// returns the largest of them.

var maxOfThree = function(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3)
      return num1; return num3;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maxOfThree(100, 90, 9));

//3.

//Define a function, as a function declaration, isCharAVowel that takes a character as an argument and
//returns true if it is a vowel, false otherwise.

function isCharAVowel(character) {
  character = character.toLowerCase()
  if (character === "a" || character === "a" || character === "a" || character === "a" || character === "a")
  return "vowel"; return false;
};
console.log(isCharAVowel("b"));

//4.

//Define a function, as a function expression, sumArray that takes an array of numbers and returns the
//sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

var arrayCount =0;

var sumArray = function(arrayNum) {
  for (var i =0; i< arrayNum.length; i++) {
    arrayCount = arrayCount + arrayNum[i];
  }
  return arrayCount;
}
console.log(sumArray([1, 2, 4, 6]));

//5.

//Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns
// the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

var arrayCount = 1;
function multiplyArray(arrayNum) {
  for (var i=0; i<arrayNum.length; i++) {
    arrayCount = arrayCount * arrayNum[i];
  }
  return arrayCount;
}
console.log(multiplyArray([2, 3, 4, 5]));

//6.

//Define a function, as a function expression, numArgs that returns the number of arguments passed
// to the function when called.

var numArgs = function(args) {
  return arguments.length;
}
console.log(numArgs(1, 2, 3, "fdsafdsa", null));

//7.

//Define a function, as a function declaration, reverseString that takes a string, reverses
//the characters, and returns it. For example, reverseString('rockstar'); would return the string
//"ratskcor".

var newString = "";
function reverseString(string) {
  for (var i=0;i < string.length; i++) {
    newString += " ";
    newString = newString.replace(newString.charAt(i), string.charAt(string.length - i));
  }
  return newString;
}
console.log(reverseString("hi"));





















