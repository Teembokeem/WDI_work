// Load express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// Create our express app
var app = express();
var methodOverride = require('method-override')
var routes = require('./routes/index');
var todos = require('./routes/todos');

//load module for data
//make todos array available on our server.js
app.locals.title = 'First Express';
//Mount express' express-static middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
//mount body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use('/todos', todos);
// Define a root route directly on app
// Later, we will use the router object
// app.get('/', function(req, res) {
//   var msg = req.query.msg ? req.query.msg : "!";
//   res.send('<h1>Hello World ' + msg + '</h1>');
// });

// app.get('/goodbye', function(req, res) {
//   res.send("<h1>Goodbye World</h1><h2><iframe src='http://codeology.braintreepayments.com/featured/facebook/itorch' width='100%' height='100%' frameBorder='0' allowFullScreen></iframe></h2>");
// });



// app.get('/goodbye', function(req, res) {
//   res.json( {msg: 'Goodbye World'} );
// });

// app.get('/goodbye/:name', function(req, res) {
//   res.send('<h1>Goodbye ' + req.params.name
//            + '</h1>'
//            + "<h2><iframe src='http://codeology.braintreepayments.com/featured/facebook/itorch' width='100%' height='100%' frameBorder='0' allowFullScreen></iframe></h2>");
// });

// Use middleware (app.use)
// Be sure to mount before routes
app.use(function(req, res, next) {
  console.log(req.headers['user-agent']);
  next();
});



//modify callback to route to home page
// app.get('/', function(req, res) {
//   res.render('home');
// });


// Configure the app (app.set)
app.set('view engine', 'ejs');

// Configure the app (app.set)
app.set('views', path.join(__dirname, 'views'));

//Passing data into the view
// app.get('/todos', function(req, res) {
//   res.render('todos/index')
// });

//for data available to all pages:
// app.locals.title = 'First Express';

//needs a route
// app.post('/todos', function(req, res) {
//   console.log(req.body.newTodo);
//   res.render('todos/index', {
//     todos: todos
//   });
// });

//use body object on request to access the new todo being submitted
// app.post('/todos', function(req, res) {
//   app.locals.todos.push({
//     todo: req.body.newTodo,
//     done: false
//   });
//   res.render('todos/index');
// });



//console logging for errors
// app.post('/todos', function(req, res) {
//   console.log(req.body.newTodo);
//   res.render('todos/index');
// });

//does not kick off unless your app is listening:
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});


