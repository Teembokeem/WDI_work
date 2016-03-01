// function multiply(x,y) {
//   return x * y
// }

// var n = multiply(5,8);

// console.log(n);

// var fives = [];

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     fives.push(i)
//   }
// };

// console.log(fives);



// var yael = require('./yael');
//   console.log(yael.name, yael.color, yael.a(1,2) );

// var dow = require('./utilities/days-of-week');
// console.log(dow.getWeekday(15));

// for (var i =0; i < 30; i++) {
//   console.log(dow.getWeekday(i));
// };

// var random = require('./w07d01-practice/random');
// for (var i = 0; i < 10; i++) {
//     console.log( random(100, 200) );
// };

// var circle = require('./w07d01-practice/circle');
// console.log( circle.area(50) );
// console.log( circle.circumference(75) );




// Don't specify path when module is in node_modules
var request = require('request');

request('https://agile-river-91261.herokuapp.com/', function(err, res, body) {
    console.log(body);
});




















