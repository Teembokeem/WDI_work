# Custom Service Lab

![A kitten delivery service, by Uber.](assets/uber-kitty.jpg)

> A Kitten Service? Could it be true?  
> — @mer

### Part 1

Take the completed Kitten Adoption app in the `/starter` folder, and
explore how it's written. Draw the components of the app out, including
the directives.

Ask any questions you have about how it works to your seatmates, and
share any unanswered questions with the class.

### Part 2

Refactor the application to use services to encapsulate the model:
a common custom service known as a "data service."

Name the service `kittiesDataService`, and put it in the file
`app/kitties/kitties.dataservice.js`.

When you are done, add the new components and structure to your
drawing.

### Bonus (Part 3)

Once you have a connection to a working data service, add a "Reset"
button to the view that resets the application to the original data
set, regardless of deletions or adoptions.

**Hints:**

1.  You will need two lists: the default, starting list, and the current
    list.
2.  **Remember this:** ***Angular binds to objects, not to variables***.
    If you have bound an object with the variable name `kittiesList`, and
    then write `kittiesList = {new: "object"};`, you aren't changing the
    bound object, *you are resetting your local variable*. Angular won't
    update its binding to the new object! In order to easily change the
    values that Angular has bound to, have Angular bind to an object
    that *contains, as properties*, the data you want to edit! Eg:

    ```javascript
    var listA = ['USA', 'CAN', 'MEX'],
        listB = ['COL', 'ARG', 'BRA'],
        containerObj;

    // create two bound objects: one directly to the list, one 
    // containing the list
    vm.binding1 = listA;
    
    containerObj = {
      list: listA
    };
    vm.binding2 = containerObj;

    // update the lists!
    listA = listB;
    containerObj.list = listB;

    vm.binding1
    //=> ['USA', 'CAN', 'MEX'] (failed!)

    vm.binding2.list
    //=> ['COL', 'ARG', 'BRA'] (worked!)
    ```
3.  When you want to copy the contents of one complex object or array to 
    another, you can't just use re-assignment (`=`) or a shallow copy 
    (`.slice`), you have to use a deep copy (`angular.copy`). Luckily this
    is a part of [the built-in Angular API][api].

### Bonus (Part 4)

Update the `kittiesDataService` to use the browser-based 
[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) known as `localStorage`.

Since you access the API on the global, browser scope (`window`), be 
sure to use the Angular-safe service that wraps it, ie:

```javascript

  function kittiesDataService($log, $window) {
    var localStorage = $window.localStorage;

    // …  
  }

```

Now the state of the app should remain after page reloads! Make sure 
that the "Reset" button resets the original data, however!

When you are done, add the new components and structure to your
drawing.

**Hints:**

1.  `localStorage` only stores strings, so you need to turn objects
    in to JSON, or parse them from JSON, when you set and get them.
    Use the [built-in Angular API for JSON][api], `angular.toJson` and
    `angular.fromJson`, not the default library `JSON.stringify` or
    `JSON.parse`:

    ```javascript
    localStorage.setItem("kittiesList", angular.toJson(kittiesList));
    ```
2.  Keep the local version of the data as a variable in the service!
    **Don't just move all the data to `localStorage`; keep the local
    version, and back it up consistently in `localStorage`.** If you
    pull the data directly out of storage and bind it to the view,
    it freaks out Angular. Angular then starts compulsively checking
    the data, meaning it keeps creating new objects; this leads to
    an infinite loop error: [`$rootScope:infdig`][infdig]. *Look out for
    this error!*
3.  If you are only updating the local variable of the list when it is
    different from the stored version, you'll need to compare the
    objects. [Use the built-in Angular API to check equality][api],
    `angular.equals`.


<!-- LINKS -->

[api]:    https://docs.angularjs.org/api/ng/function
[infdig]: https://docs.angularjs.org/error/$rootScope/infdig
