module.exports = function(a,b) {
  return Math.floor(Math.random() * (b - a)) + ( a > b ? b : a);
};
