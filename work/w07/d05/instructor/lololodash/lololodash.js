// ||||||||||||||||||||||||
// LOLOLODASH
// ||||||||||||||||||||||||

// Answers path for ALL nodeschool lessons:
// /Users/ezRAez/.nvm/versions/node/v4.0.0/lib/node_modules/

// Answers for lololodash:
// ~/.nvm/versions/node/v4.0.0/lib/node_modules/lololodash/exercises

// -> Create an object called 'robot' using an object literal
// -> robot should have a property 'smart' with value true
// __

// -> Claim the result robot.smart
// claim(robot.smart, __);

// ------------------------------------------------
// Common JS exports for verification, don't modify
// module.exports = {
//  robot: robot
// }

// 1. GETTING STARTED

var _ = require('lodash');

// var worker = function(workers) {
//   return _.where(workers, {active: true});
// }
//
// module.exports = worker;


// 2. SORT ME

// var sorting = function (collection) {
//   return _.sortBy(collection, function (item) {
//       return -item.quantity;
// });

// var sorter = function(articles) {
//   return _.sortBy(articles, "quantity").reverse();
// }
//
// module.exports = sorter;


// 3. In Every Case

// 'use strict';

// var _ = require("lodash");

// module.exports = function(collection) {
     // add a size attribute to the collection based on the item's population
//   return _.forEach(collection, function(item) {
//     if (item.population > 1) {
//       item.size = "big";
//     } else if(item.population > 0.5) {
//       item.size = "med";
//     } else {
//       item.size = "small";
//     }
//   });
// };

// var everyCase = function(towns) {
//   return _.forEach(towns, function(town) {
//     town.population >= 1 ?
//     town.size = "big" :
//     (town.population >= 0.5 ? town.size = "med" : town.size = "small");
//   });
// }
//
// module.exports = everyCase;

// 4. EVERYONE IS MIN

// function check_temp (item) {
//   return item > 19;
// }
//
// var whatsHot = function (item) {
//   var result = { hot: [], warm: [] };
//   _.forEach(item, function (town, townname) {
//     if (_.every(town, check_temp)) {
//       result.hot.push(townname);
//     } else if (_.some(town, check_temp)) {
//       result.warm.push(townname);
//     }
//   });
//   return result;
// };
//
// module.exports = whatsHot;


// 5. CHAIN MAIL

// var capChained = function(words) {
//   return _.chain(words)
//           .sortBy()
//           .map(function(word) {
//             return word.toUpperCase() + "CHAINED";
//           });
// }
//
// module.exports = capChained;


// 6. COUNT THE COMMENTS

// var userCommentCount = function(comments) {
//   var commentCount = [];
//   comments = _.groupBy(comments, 'username');
//   _.forEach(comments, function(item, name) {
//     commentCount.push({
//       username: name,
//       comment_count: _.size(item)
//     });
//   });
//
//   return _.sortBy(commentCount, "comment_count").reverse();
// }

//
// var commentcount = function (comments) {
//
//     var counted = [];
//
//     // Group by username
//     comments = _.groupBy(comments, "username");
//
//     _.forEach(comments, function (item, name) {
//
//         counted.push({
//             username: name,
//             comment_count: _.size(item)
//         });
//     });
//
//     return _.sortBy(counted, function(comment) { return -comment.comment_count; });
// };
//
// module.exports = commentcount;

// 7. GIVE ME AN OVERVIEW

// var overview = function (orders) {
//
//   var overviewArr = [],
//       total = 0;
//
//   orders = _.groupBy(orders, 'article');
//
//   _.forEach(orders, function (item, key) {
//       total = 0;
//
//       if (item.length === 1) {
//           total = item[0].quantity;
//       } else {
//           total = _.reduce(item, function(sum, item) {
//               return sum + item.quantity;
//           }, 0);
//       }
//
//       overviewArr.push({article: +key, total_orders: total});
//   });
//
//   overviewArr = _.sortBy(overviewArr, "total_orders").reverse();
//
//   return overviewArr;
// };
//
// module.exports = overview;


// 8. ANALYZE


// var analyze = function (item) {
//
//     var average,
//         underperform,
//         overperform;
//
//     // Sort
//     item = _.sortBy(item, "income");
//
//     // Sum of all incomes
//     average = _.reduce(item, function(sum, num) {
//         return sum + num.income;
//     }, 0);
//
//     // calculate average
//     average = average / item.length;
//
//     // filter underperformer
//     underperform = _.filter(item, function (num) {
//         return num.income <= average;
//     });
//
//     // filter overperformer
//     overperform = _.filter(item, function (num) {
//         return num.income > average;
//     });
//
//     return {
//         average: average,
//         underperform: underperform,
//         overperform: overperform
//     };
//
// };
//
// module.exports = analyze;


// 9. START TEMPLATING

var template = function (inputvar) {

    var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(inputvar);
};

module.exports = template;
