![](https://liteweb.ca/images/2014/ngresource.png)

# RESTful Resources in AngularJS

| Learning Objectives |
| :--- |
| Understand the use case for `$resource` |
| Create a `$resource` "class" for a resource |
| Perform CRUD using `$resource` |
| Refactor by creating a service |

## Roadmap

- The What, When, Why & How of `$resource`
- How to use `$resource`
- Preparing an app to use `$resource`
- The sample RESTful API Backend
- Obtaining a Resource "Class" 
- Retrieving Data
- Creating Data
- Deleting Data
- Refactoring with Services
- Updating Data
- Adding a Custom Action Method
- Exercise
- Hardcore Bonus - Add Virtual Properties!

## The What, When, Why & How of `$resource`

### What is `$resource`?

- `$resource` is an AngularJS service designed to work with RESTful APIs<br>**?: How is a RESTful API different from a non-RESTful API?**.

- `$resource` provides a layer of abstraction on top of the `$http` service - it uses `$http` under the hood to power the lower-level HTTP requests.

- The `$resource` service is defined in the `ngResource` module (not part of the Angular core library), thus its script is loaded separately in our page and the `ngResource` module listed as a dependency in app's main module.

- The `$resource` service creates **class-like** objects that have action methods that provide high-level access to RESTful resources without having to interact with the low-level `$http` service.

### When to Use `$resource`?

- Use the `$resource` service instead of the `$http` service if the API you are accessing has a RESTful interface. Using `$resource` makes it easier to perform CRUD with RESTful resources (models/data entities) on the server.

- Don't use `$resource` if an API returns non-entity data, for example, the type of data returned by the [http://openweathermap.org/api](http://openweathermap.org/api) API. Access these types of APIs with the `$http` service instead.

### Why Use `$resource`?

- Using `$resource` to work with resource data is more productive than using `$http`. `$resource` enables us to write less code vs. using `$http`.

- Using `$resource` will feel like working with bare-bone versions of _ActiveRecord_ and _MongooseJS_ to access models.

### How To Use `$resource`

- Invoking `$resource()` with configuration data returns a "class-like" resource/model object:

	```js
  	var User = $resource(// config info);
	```
  
   The returned object, `User`, would then behave like a "class" for fetching and creating resources; that is why it should be named using UpperCamelCase.
   
- The resource class has action methods we can use to fetch, update, and delete resources. For example, to retrieve a particular user we would use the `get` action method:

	```js
	...
	var vm = this;
  	var User = $resource(// config info);
  	vm.user = User.get({id: 1});
	...
	```

- You would then be able to bind to the attributes of the returned `user` in your view. You can also easily update the attribute values and save them back to the server (we'll see this later).

- As mentioned, using `$resource` enables us to do more with less code:

  -  All we have to do is provide some configuration info and it will issue requests to the server using HTTP verbs and URL paths that are REST compliant. No more manually building the URL like we have to with `$http`.

  -  It automatically wraps our resource instance objects so that we can update and delete them by simply calling methods - `$resource` will take care of sending the RESTful request to the server.
   
   - One thing you might have noticed in the above code, is that there's **no callback** function despite the fact that we are contacting a server for data, which we know to be an asynchronous operation. We don't need a callback because `$resource` did us big favor by **immediately** returning an empty object (or array when we use the `query()` method to return all resources), then, when the async request has returned the data, `$resource` will populate the property or variable with the data returned and the view will automatically update! Less callbacks = less code!

   - If for some reason we need to process the returned data before storing it in a view model property or variable in the controller, we can still use a callback, however, the argument passed in will be either an object representing our resource, or an array of those resources, not a response type object as with `$http`: 

    	```js
    	...
		var vm = this;
  		var User = $resource(// config info);
  		User.query(function(users) {
  			// sort users by name
  			users.sort(function(a, b) {
  				return a.localeCompare(b);
  			});
  			vm.users = users;
  		});
  	  	...
    	```
   
In summary, using `$resource` allows us to:

1. Work with data retrieved from a RESTful API in a way that is more object oriented.
2. Work with resources in a way that feels more like we've been doing using models
3. Do more with less code.

**?: When should you choose to use the `$resource` service instead of `$http`?**

**?: Before we can use the `$resource` service inside of a component such as a controller or custom service, it must be provided to the component via ____________ ____________**

**?: When we invoke `$resource()` it returns a __________-like resource object we can use to retrieve and create resource data with.**

## Preparing an app to use `$resource`

Configuring an application to use the `$resource` service requires that we:

1. Include the script in our HTML that loads the `ngResource` module.
2. List the `ngResource` module as a dependency in our application's main module.
3. Inject the `$resource` service (registered within the `ngResource` module) in any controller, directive, filter or other service as needed.

### Starter Code

Copy the starter code to your working directory.

Note that inside `app.js`, where we are defining our main `app` module, we are still wrapping it in an IIFE despite having no variable or function definitions. We are doing this because it's a good practice and when we later do write some config code, we'll remain tidy as far as the global scope is concered.

The app is purposely **not** set up to be ready to go so that you can practice getting an Angular app bootstrapped.

**Take a couple of minutes to get the Angular app up and running. Test by putting a binding expression in the `<body>`.**

We'll use the _controllerAs_ for this lesson and we'll name our controller as `vm` in both the view and the controller function - since now you realize they don't have to be named the same :)

### Include the Script for the `ngResource` Module

Now that your app is bootstrapping, it's time to bring in the script for the `ngResource` module:

Get it from the [AngularJS website](https://angularjs.org/) download page. Be sure to access the version that matches the core Angular script you've loaded and include it:
 
- **after** AngularJS's main script
- but, **before** any of our app's script

### Inject the `ngResource` Module

Remember that empty array that's the second parameter in our `app` module definition? That array is for injecting other modules that our app uses, and now it's time that we use it to inject the `ngResource` module.

In `app.js`:

```js
angular.module('app', ['ngResource']);
```

### Inject the `$resource` Service

`$resource` is a service that is registered with the `ngResource` module and now that the module has been injected into our main `app` module, the `$resource` service is available for us to inject anywhere we need it.

Let's inject it into our `MainController`:

```js
angular.module('app')
  .controller('MainController', MainController);

function MainController($resource) {
  var vm = this;
  
}
```

Are we safe from minification?

**?: Below is an easy fix using the `$inject` property. What's another way?**

```js
...
MainController.$inject = ['$resource'];

function MainController($resource) {
  var vm = this;
  
}
```

## The sample RESTful API Backend

We obviously need a RESTful API backend to use in this lesson.

The [JSONPlaceholder](http://jsonplaceholder.typicode.com/) site will serve our needs just fine.

It will return the proper status codes and JSON when we create, delete and update resources, however, our changes will not actually be persisted in JSONPlaceholder's database. Therefore, each time we load/refresh our app, the data will be back to its original state - no problem here because we can always check the network traffic in Chrome's dev tools to ensure that our requests are successful.

We will work with two of the resources available: `todos` and `users`.

Now check out the **Routes** section on JSONPlaceholder's landing page and review its RESTful routes.

## Obtaining a Resource "Class" 

As mentioned earlier, we use the `$resource` service to return a high-level "class" object that has action methods we can use to work with a resource.

We obtain this resource class by invoking `$resource()`, supplying arguments that provide configuration data.

Here we go:

```js
function MainController($resource) {
  var vm = this;
  // Obtain our resource class
  var Todo = $resource('http://jsonplaceholder.typicode.com/todos/:id', {id: '@id'});
}
```

We can now use the `Todo` resource class to access JSONPlaceholder's RESTful API for the _todo_ resource.

The first parameter is obviously the RESTful URL.

Notice the `:id` named parameter. It seems like this would be a problem when issuing REST requests such as `GET /todos` to retrieve all _todos_, however, if a value is not provided for `:id`, an empty string replaces the named parameter placeholder. Also, any trailing slashes will automatically be trimmed, so our URL ends up looking sweet for `GET` requests - thanks `$resource`!

The second parameter is an object that contains default parameters. The key of `id` maps to the named parameter in the URL. What does that weird `'@id'` do? Well, the `@` tells `$resource` to get the value from the current resource **instance**. For example, if we were working with MongoDB here, we would pass `{id: '@_id'}` instead. This whole mechanism of default parameters is what allows us to easily **update** and **delete** a particular resource object without having to specify a value for the named parameter. However, when we want to **retrieve** a specific resource, we of course would pass in the value like we did above:<br>`vm.user = User.get({id: 1});`

With our resource class in hand, let's get some data!

## Retrieving Data

### Retrieving all data with the `query()` action method

Let's start by retrieving all 200 _todos_:

```js
function MainController($resource) {
  var vm = this;
  // Obtain our resource class
  var Todo = $resource('http://jsonplaceholder.typicode.com/todos/:id', {id: '@id'});
  // Retrieve all todos
  vm.todos = Todo.query();
}
```
After the data returns from the server, `vm.todos` will be an array of `Todo` resource instances. Let's bind our view to `vm.todos` to check out the data. Nothing fancy, just a way to see what data we're receiving:

```html
<body class="container" ng-controller="MainController as vm">
  <br>
  <div class="jumbotron text-center"><h1>Angular RESTful Todos</h1></div>
  <ul class="list-group">
    <li class="list-group-item" ng-repeat="todo in vm.todos">{{todo}}</li>
  </ul>
</body>
```

>**Note:** Just a reminder that because those resource objects are held in an array, you can access those critters like any other object in an array. You can `console.log` the `vm.todos` array to check it out, but you have to do it by putting a callback function inside of the `query()` method.

### Retrieve a specific resource with the  `get()` action method

Even though we have all of the _todos_ displayed, for learning purposes, let's re-fetch one if we click on it and show it in our view:

```js
...
  vm.todos = Todo.query();
  // Fetch the clicked todo
  vm.selectTodo = function(todo) {
    vm.selectedTodo = Todo.get({id: todo.id});
  };
```
One line of code in our click handler!

Now for the view:

```html
<body class="container" ng-controller="MainController as vm">
  <br>
  <div class="jumbotron text-center"><h1>Angular RESTful Todos</h1></div>
  <dl>
    <dt>Todo Id</dt>
    <dd>{{vm.selectedTodo.id}}</dd>
    <dt>User Id</dt>
    <dd>{{vm.selectedTodo.userId}}</dd>
    <dt>Todo</dt>
    <dd>{{vm.selectedTodo.title}}</dd>
    <dt>Completed</dt>
    <dd>{{vm.selectedTodo.completed}}</dd>
  </dl>
  <ul class="list-group">
    <li class="list-group-item" ng-repeat="todo in vm.todos" ng-click="vm.selectTodo(todo)">{{todo}}</li>
  </ul>
</body>
```
Take note on how we can pass the current `todo` into the `ng-click` handler - now that's pretty cool.

**Any questions before you practice setting up and retrieving the _users_ resource like we did above with _todos_?**

### Individual Practice (10 mins)

Now it's your turn:

- Use `$resource` to create another resource class for the `users` resource .

- Use the `query()` action method to retrieve all users, but instead of assigning the results directly to a property on the view model (`vm`) like with did with the _todos_ like this:<br>
`vm.todos = Todo.query();`<br>
let's use the callback syntax like this instead:<br>

	```js
	  User.query(function(users) {
	    vm.users = users;
	  });
	```
	Use the callback syntax whenever you need to perform some action(s) after the data has returned, which we will be doing in a bit...

- For now, let's just display the users in a `<ul>` above the one for todos.

## Creating Data

### Prepare the UI

To try out creating data, we're going to create a new _todo_ for a selected user.

#### Add a `<select>` for Users

Let's prepare our UI by putting our users in a `<select>` element so that we can choose which user to create the new _todo_ for.

Replace the `<ul>` currently being used to display the users with a `<select>` like this:

```html
<body class="container" ng-controller="MainController as vm">
  <br>
  <div class="jumbotron text-center"><h1>Angular RESTful Todos</h1></div>
  <select class="form-control" ng-model="vm.selUserId">
    <option ng-repeat="user in vm.users" value="{{user.id}}">{{user.name}}</option>
  </select>
...
```
The `ng-model` on a `<select>` will bind to the `value` attribute of whatever option is currently selected. So in the code above, `vm.selUserId` will always hold the `value` of the selected option.

>Note that there is a trick `ng-options` directive for use in `<select>` elements that automatically generate the `<option>` elements. However, it has several syntaxes, so check out the [Angular docs - ngOptions](https://docs.angularjs.org/api/ng/directive/ngOptions) if you want to use it in an app. Meanwhile, in this lesson, we'll use our trustworthy friend, the versatile `ng-repeat`.

Refresh the page, and you'll find the users in the `<select>`.

However you'll notice that when the page loads, the `<select>` is empty.

To automatically make our `<select>` show the first user, let's add a line of code inside of that callback you wrote for the `User.query` call:

```js
  User.query(function(users) {
    vm.users = users;
    vm.selUserId = vm.users[0].id.toString();
  });
```

Refresh, and now the first user will automatically be selected :)

#### Add an `<input>` for the New Todo

Next, let's add an `<input>` for our new _todo_ and a `<button>` with a `ng-click` directive so that your view looks like this:

```html
<body class="container" ng-controller="MainController as vm">
  <br>
  <div class="jumbotron text-center"><h1>Angular RESTful Todos</h1></div>
  <select class="form-control" ng-model="vm.selUserId">
    <option ng-repeat="user in vm.users" value="{{user.id}}">{{user.name}}</option>
  </select>
  <br>
  <input type="text" class="form-control" placeholder="new todo..." ng-model="vm.newTodo">
  <br>
  <button class="btn btn-success" ng-click="vm.addTodo()">Add Todo</button>
  <hr>
  <ul class="list-group">
    <li class="list-group-item" ng-repeat="todo in vm.todos" ng-click="vm.selectTodo(todo)">{{todo}}</li>
  </ul>
</body>
```

### Creating a New Todo

To create a new resource object, we can either call the `save()` method on the `Todo` resource class, passing in our new data, or we can treat the resource class as a constructor to create a new resource instance. We'll look at both approaches.

#### Using the `save()` Class Method

```js
...
  // Add todo click handler
  vm.addTodo = function() {
    Todo.save({
      userId: parseInt(vm.selUserId),
      title: vm.newTodo,
      completed: false
    }, function(todo) {
      vm.todos.push(todo);
      vm.newTodo = '';
    });
  };
...
```
Here we used a callback because the new _todo_ resource returned from the server has its `id` assigned to it - you can check this in the network activity of DevTools.

We pushed the new _todo_ into our `vm.todos` array and our view updated automatically.

For a better UX, notice that we clear our `<input>` by changing the data model, not the `<input>` itself like we would have with jQuery or native JS - remember, we drive our AngularJS apps with data, and the view just responds thanks to binding.

>**Note:** Since the _jsonplaceholder_ API server is not actually persisting our new todos, the server returns every newly created todo with an id of 201.

#### Using the Resource Class as a Constructor

Here's another way to accomplish the same thing:

```js
  // Add todo click handler
  vm.addTodo = function() {
    var todo = new Todo({
      userId: parseInt(vm.selUserId),
      title: vm.newTodo,
      completed: false
    });
    todo.$save(function() {
      vm.todos.push(todo);
      vm.newTodo = '';
    });
  };
```

We are using the same `Todo` resource class as a constructor function using the `new` keyword. This returns an in-memory, newly created instance of the resource - it is not sent to the server API until `$save` is called.

Notice on the resource **instance**, the method to call is `$save()` instead of `save()` on the resource class.<br>**?: Why do you think Angular prepends a `$` to the method names on instances of a resource?**

You just saw two ways to create a new resource object and send it to the API. Which method you use is up to you. The API server doesn't care, it receives the identical request either way. Personally, I lean toward using the constructor method because if feels more object oriented to me...

### Individual Practice (5 mins)

When our app loads:

- Create a new user with your `name` and `email` and add to the **end** of the `vm.users` list.

- Verify that your new user is shown at the bottom of the `<select>` dropdown.

## Deleting Data

There are both `delete`/`$delete` and `remove`/`$remove` methods available that do the same thing - send a RESTful request to the server to delete a resource.

**?: What is the difference between the methods with a `$` and without?**

Let's add a little button to our view:

```html
...
  <ul class="list-group">
    <li class="list-group-item" ng-repeat="todo in vm.todos" ng-click="vm.selectTodo(todo)">
      <button class="btn btn-xs btn-danger" ng-click="vm.deleteTodo(todo)">X</button>&nbsp;
      {{todo}}
    </li>
  </ul>
...
```

We're going to use the `$delete` instance method:

```js
  // Delete todo click handler
  vm.deleteTodo = function(todo) {
    vm.todos = vm.todos.filter(function(t) { return (t.id !== todo.id); });
    todo.$delete();
  };
```

Check the network traffic!

This is how you would use the class method version:

```js
Todo.delete({id: todo.id});
```

Note that the object being passed in needs to provide the value for the route's named parameter as defined in the `$resource()` method.

## Refactoring with Services

Enabling editing is going to require further configuration/customization of our `$resource`'s. This means more code in the controller that really has nothing to do what our controller's purpose is.

Further, in a real app, we probably would want to work with the same resource(s) in multiple views/controllers. Would we want to configure `$resource` again and again? Of course not, that wouldn't be DRY, and non-DRY code makes our code less maintainable and more prone to errors.

### What are Services

Luckily, Angular has a great solution - **services**. Services, as you've seen, are reusable components of data and behavior that can be injected where needed.

A service is instantiated only once when first needed.<br>
**?: What do we call an object in OOP that's designed to be instantiated once?**

Once instantiated, unlike a controller, it is persisted throughout the lifetime of our app. If your app needs data from an API or database, we probably don't want to keep loading that same data every time we change routes. Fetching that data once and holding it in a service makes a lot of sense.

Also, because services are persistent singletons, they provide an excellent mechanism to share data between controllers.

There are five different types of services: `service`, `factory`, `provider`, `value` & `constant`.

We are going to use the `factory` method in this lesson which is by far the most common and flexible type of service.

### Moving the `Todo` Resource into a Service

Our Angular components should have their own files. Let's first create another directory inside our `js` directory called `resources` and create a file named `todo-resource.js`:

```
> mkdir js/resources
> touch js/resources/todo-resource.js
```

Before we start writing the code for our service, we should add this new script file to our `index.html` before we forget! The `<head>` should now look something like this:

```html
<head>
  <meta charset="UTF-8">
  <title>Angular RESTful Resources</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <script src="https://code.angularjs.org/1.4.8/angular-resource.min.js"></script>
  <script src="js/app.js"></script>
  <script src="js/main-controller.js"></script>
  <script src="js/resources/todo-resource.js"></script>
</head>
```

>**Note:** It is not uncommon for AngularJS SPAs to have dozens of script files.

In the `todo-resource.js` file, let's stub up a `factory` service named `Todo`:

```js
(function() {
  'use strict';

  angular.module('app')
    .factory('Todo', Todo);

  Todo.$inject = ['$resource'];

  function Todo($resource) {

  }

})();
```

To make sure we've stubbed things up correctly, let's use dependency injection to provide `MainController` with the new `Todo` service:

```js
angular.module('app')
  .controller('MainController', MainController);

MainController.$inject = ['$resource', 'Todo'];

function MainController($resource, Todo) {
  var vm = this;
...
```

Now, to test things, let's return a simple object from our factory like this:

```js
  function Todo($resource) {

    return {
      testString: 'This is a test string',
      testNumber: 13
    };

  }
```

>Note: When defining a `factory` service, whatever the factory function returns becomes our service and is assigned to the name we gave the `factory`, in this case, `Todo`.

Now let's assign it to our view model in our controller so that we can bind to it in our view:

```js
function MainController($resource, Todo) {
  var vm = this;
  // Just testing our first factory!
  vm.factoryTest = Todo;
...
```

>Key Point: If there is data or methods in a service you want to bind to in the view, you must assign them to the controller's view-model. Remember, controllers are responsible for providing data to views, not services. 

Lastly, in our view:

```html
<body class="container" ng-controller="MainController as vm">
  <br>
  <div class="jumbotron text-center"><h1>Angular RESTful Todos</h1></div>
  <p>test string: {{vm.factoryTest.testString}}</p>
  <p>test number: {{vm.factoryTest.testNumber}}</p>
...
```

Pretty cool? Now remove that test stuff from `index.html` and `MainController`.

So what's next? Let's get that code for the Todo resource out of `MainController` and into the `Todo` service where it belongs!

Update `todo-resource.js` as follows:

```js
  function Todo($resource) {

    return $resource('http://jsonplaceholder.typicode.com/todos/:id', {id: '@id'});

  }
```
So now, the `Todo` service **is** the resource class!  Wherever we inject `Todo`, we will be able to do things like<br>`var todo = new Todo({ props in here... });`<br>and<br>`var todos = Todo.query();`<br>etc.

Now, in our controller:

1. Inject the `Todo` service.

2. Remove the `$resource` configuration code.

3. Things should continue to work because we were assigning our `$resource` to a variable named `Todo` which our `Todo` factory has just taken over for!

You can now inject the `Todo` resource into any controller, directive, filter or other service!

**?: What type of component is an AngularJS `factory`?**

### Individual Practice (5 mins)

Just like we did with the `Todo` resource, refactor the existing `User` resource into a new factory.

After you're done, and now that both resources are being dependency injected into our controller, it's safe to remove the `$resource` dependency from the controller.

Make sure the app still flies!

## Updating Data

### Customizing the `Todo` Resource Class

Somewhat surprisingly, the designers of the `$resource` service decided to leave out a RESTful method to update resources - something about how not all backends implement updates the same...

Also, one of the gotchas with the `save`/`$save` method is that it always uses the HTTP `POST` method. This is cool for creating resources, but usually not updating them because most RESTful backends **are expecting what verb(s) to update a resource?** 

The good new is that the lack of an `update` method provides us with the opportunity to see how easy it can be to customize our resource class.

So far, we've provided two arguments when invoking the `$resource` method to configure the resource class.

We can also provide a third, which is an object of additional action methods!

Let's pass in a third argument to add an `update` action that will use `PUT` as the HTTP method. In `todo-resource.js`:

```js
...
  function Todo($resource) {

    return $resource(
      'http://jsonplaceholder.typicode.com/todos/:id',
      {id: '@id'},
      {'update': { method: 'PUT'}}
    );

  }
```
The object that is being assigned to the `'update'` key, is actually a configuration object for the underlying `$http` service.

If you want to know more about all of the options, including ways you can automatically add headers for doing things like passing auth tokens, check out the [docs for the **$http** service](https://docs.angularjs.org/api/ng/service/$http).

In this case, all we need to specify is that our `update` action uses the `PUT` HTTP verb. We will look at a more complex customization in a bit.

Now, every single _todo_ resource instance has a `$update` method available!

Let's see this in the `console`:

```
// grab the instance of our MainController
> var ctrl = angular.element($('body')).controller()
> ctrl
// now drill into the '__proto__' of one of the elements in the 'todos' array.
```

Pretty cool - right?

Let's continue to use the console to see how we can use that `$update` method to update a _todo_ resource object.

```
// set a var to the first todo
> var todo = ctrl.todos[0]
// update an attribute
> todo.completed = true
// save that sucka
> todo.$update()
```
Did you see the view update?!?!

>**Note:** Accessing a controller in the console like this is a handy trick for debugging AngularJS apps. I hope you find this Angular Ninja move handy one day!

Check the network activity - there's the proof that we made a<br>`PUT http://jsonplaceholder.typicode.com/todos/1` RESTful request to update a resource.

**?: How did `$resource` know where to find the value to append to the end of the URL?**

### Individual Practice (5 mins)

Modify the `User` factory to return a configured `$resource` class that includes an `update` action method.

## Adding a Custom Action Method

In a real-world app, it's fairly rare to want to retrieve every record in a database table like we have been doing with this code `vm.todos = Todo.query();`

In our current Todo app, we could use an Angular filter to easily show only the todos for the selected user. However, let's pretend that our Todo app has thousands of users. So much for loading ALL of those todos and filtering!

The _JSONPlaceholder_ site shows that their RESTful API has some nested resources, including _todos_ being nested within the _users_ resource.

**?: Who remembers what the standard RESTful URL would look like to retrieve all _todos_ for a specific _user_?**

Let's see how we can add this capability to our `Todo` resource:

```js
  function Todo($resource) {

    return $resource('http://jsonplaceholder.typicode.com/todos/:id', {id: '@id'}, {
      'update': { method: 'PUT'},
      'forUser': {
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users/:userId/todos',
        isArray: true
      }
    });

  }
```
We just created a custom action method named `forUser`, a custom name that we made up.

Now we are able to fetch the _todos_ for any specific user with code like this:

```js
var userTodos = Todo.forUser({userId: xx});
```

In case it's not obvious, the value for `xx` can be supplied by any data available in the controller, including a property bound to the view!

>**Note:** If we invoke an action and supply more parameters than there are _named parameters_ in the URL defined for the action/resource, the excess key/values are appended as a query string (you know, after the `?`). This can be very useful! Here's an example:

```js
var userTodos = Todo.forUser({userId: 2, limitTo: 10});
// would result in the following URL:
// http://jsonplaceholder.typicode.com/users/2/todos?limitTo=10
// the server can now act upon this data and only return 10 only todos...
```
I hope seeing stuff like this excites you like it does me :)

### Individual Practice (10 mins)

Modify our app to show only _todos_ for the user that's selected!

Hints:

- Currently, we are fetching and assigning all _todos_ to `vm.todos`, now we only want to fetch and assign _todos_ for the selected user.

- When we select a different user in the `<select>`, we're going to have to re-fetch _todos_.  There's a nifty directive that's perfect for `<select>` elements, `ng-change`, which can invoke a method in the controller when a new option is selected.

- Remember we wrote a line of code in a callback to automatically select the first user in the `<select>`? Right after that line of code would be a great time to call the same method that `ng-change` calls so that the _todos_ display for that first user.

## Exercise

#### This exercise may be completed as pairs.

Improve the Todo app as follows:

- Improve the display of the todos:
  - Display only the `title` text
  - Display the value of `completed` in a checkbox

- Update the todo on the server each time `completed` is changed

- Add the ability to edit the `title` text for todos
  - Remember to drive your UI with data! For example, show/hide your edit related HTML if a property on the view model is set to a todo/null - something like a _todoBeingEdited_ property.

## Hardcore Bonus - Add Virtual Properties!

Because our resource class is a constructor function for resource objects, we can attach extra functionality to its `prototype` that will then be available to all instances of that resource!

For example, if we wanted to be able to easily access only the first name of a user, we could write our `User` resource like this:

```js
  function User($resource) {
    var UserResource = $resource('http://jsonplaceholder.typicode.com/users/:id', {id: '@id'});
    UserResource.prototype.firstName = function() {
      return this.name.split(' ')[0];
    };
    return UserResource;
  }
```

Better yet, if you wanted to make `firstName` behave like a property instead of having to execute a getter function, here's some JS Ninja stuff for you:

```js
  function User($resource) {
    var UserResource = $resource('http://jsonplaceholder.typicode.com/users/:id', {id: '@id'});
    Object.defineProperty(UserResource.prototype, 'firstName', {
      get: function() { return this.name.split(' ')[0]; }
    });
    return UserResource;
  }
```

Now you can bind `firstName` to your view without having to invoke it as a function!

You now have the ability to create client-side resource models that behave a lot like the models we've worked with on the server!
  
## Resources

[AngularJS's documentation for $resource](https://docs.angularjs.org/api/ngResource/service/$resource)

[AngularJS's documentation for $http](https://docs.angularjs.org/api/ng/service/$http)
  