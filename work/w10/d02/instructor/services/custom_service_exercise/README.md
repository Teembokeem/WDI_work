# Creating a Custom Service

Here we are going to take a contrived situation: in the `/starter` code
is a minimal, working Angular app. That app has one view that binds,
in different places, to two controllers.

Our hope is to share data between these controllers by "injecting" a
shared service in to both of them. The term of art for a service that
holds shared data for our application is a **data service**.

In order to implement the new service, we will first refresh the
data binding and directives, injecting a built-in Angular service,
and then finally write our own.

### Part 1

Add an input to the `<section class="content">` (bound to the 
`MainController`) of the view template. This input should be bound
to the `MainController#message` (`vm.message`) in such a way that
you can type in it and update `MainController#message`.

Hints:

- start by creating the input;
- while the HTML attributes `value` and `placeholder` *display* the
  message in the input, they don't *bind* the data to the controller.

### Part 2

Add a button to the `<section class="content">` with the text "Log."
Make sure that when you click on the button it logs the
`MainController#message` (`vm.message`) to the console.

Hints:

- don't use (`window.`) `console.log`! Use the Angular service!

### Part 3

*As a walkthrough*: write the code to create a new Factory component for
our app, ie a **service**, and register it to the application module.
Return an object from the Factory.

1.  Name the Factory/service `messageDataService`, and create it in the file
    `app/layout/message.dataservice.js`. Link it in the HTML, before the
    controllers (which depend upon it), but after the module (which always
    comes first).
2.  Store the default message in the new service's object, with the
    key/property `message`.
3.  Inject the new service into both of the controllers, and bind them to
    `vm.data`.
4.  Update the view templates to reference the newly bound `vm.data.message`.
