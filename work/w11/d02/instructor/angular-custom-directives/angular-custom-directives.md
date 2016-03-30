![](https://mscblogs.blob.core.windows.net/media/dwahlin/Windows-Live-Writer/AngularJS-Custom-Directives-Video-Course_B732/CourseLogoSuperHero_3.jpg)

---

## Learning Objectives
<br>

- Understand the Use Case for Custom Directives

- Create a Custom Directive

---

## Roadmap

- Review: What are Directives?

- What Can Custom Directives Do?

- Our First Custom Directive

- More About the DDO

- `templateUrl` and `restrict` Options

- Oh, Behave!

- Rainbows and Unicorns

- Lab / After Hours

---

## What are Directives?

---

#### Do you remember this question...
<br><br>
### What would happen if we didn't include any directives in our HTML?

---

### As far as Angular is concerned,
![](http://tenyearsofmylife.com/blog/wp-content/uploads/2013/06/awln260.png)

---

### Directives teach `<HTML>` new tricks!
<br>

![](http://www.old-dog-new-tricks-media.com/images/OldDogNewTricks.jpg)

---

### Take a few minutes to discuss the Angular directives we've used so far **and** be prepared to discuss what each one does...

---

## What Can Custom Directives Do?

---

### Anything We Need Them To:

- Add custom behavior to elements:
   - Add "click to edit" behavior to HTML content
   - Do something on mouseover, like show a popup
   - Etc.

- Make reusable **widgets** with custom behavior:
  - Login forms
  - Step-by-Step Wizard
  - Movable Panels
  - Etc.

- Make custom elements:
  - Turn lots of HTML into a tiny amount
  - Make HTML even more semantic

---

## Our First Custom Directive

---

### Starter Code
<br>

- Copy and Review

- Start a local web server `> http-server`<br>If you don't have it installed do this `> npm install -g http-server`

- Create a new file for our directives: `js/my-directives.js`

- Remember to load it in `index.html`

---

![](https://s-media-cache-ak0.pinimg.com/736x/3c/6a/ae/3c6aaea765cfd1f4de1ac336377a3f8d.jpg)

### Anatomy of a Directive Declaration...

---

### Anatomy of a Directive Declaration
<br>

- Not much different than the other types of **components** we've been declaring...

	```js
	  angular.module('app')
	
	  .directive('wdiFirst', wdiFirst);
	
	  function wdiFirst() {
	    return {
	      // Directive's DDO
	    };
	  }
```

---

### First Direcive
<br>

- The Directive Definition Object (**DDO**) has several options (key/value pairs) we can use to define our directive.

- The first option we'll look at is `template`

	```js
	  function wdiFirst() {
	    return {
	      template: 'Hello <strong>{{wdi}}</strong>'
	    };
	  }
	```
	
---

### First Directive
<br>

- Where do we _use_ directives?

- Let's add our directive below our `jumbotron`

	```html
	<wdi-first></wdi-first>
	```
Notice how Angular converts Javascript's _camel-casing_ to _kebob-casing_ in the HTML

- Congrats on creating your first custom directive!<br><br>**QUESTIONS?**

---

## More About the **DDO**
<br>

- You've witnessed the power of Angular's built-in directives, so you can imagine that the options in the `DDO` might be a little complex - and you would be right!

- [This page](https://docs.angularjs.org/api/ng/service/$compile) documents the options for the `DDO`.

- We're not going to learn how to create the next `ng-repeat` in this lesson, but let's take a baby step or two...

---

## _templateUrl_ and _restrict_ Options

- Let's say we want to make the form reusable. Let's convert our `wdi-first` to a `person-form`:

	```js
	.directive('personForm', personForm);
	function personForm() {
	return {
	  restrict: 'AE',
	  templateUrl: 'person-form.html'
	};
}
	```

- The `restrict` option specifies _how_ the directive can be used in the HTML.<br>&nbsp;&nbsp;`A` - Can be used as an **attribute**<br>&nbsp;&nbsp;`E` - Can be used as an **element**

---

### _templateUrl_ and _restrict_ Options
<br>

```js
...
	// template: 'Hello...
	templateUrl: 'person-form.html'
...
```

- Inline templates using the `template` option are okay for little snippets, however, most of the time we will want to put our HTML into separate template files and loaded with the `templateUrl` option.

- Create the `person-form.html` file.

---

- Move this HTML from `index.html` into `person-form.html`

```html
<div class="row col-xs-4 col-xs-offset-4">
  <h3>Example Form</h3><hr>

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="form-control" ng-model="person.name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="text" id="email" class="form-control" ng-model="person.email">
  </div>
  <div class="form-group">
    <label for="mobile">Mobile Number</label>
    <input type="text" id="mobile" class="form-control" ng-model="person.mobile">
  </div>

  <button class="btn btn-success">Add Person</button>
</div>

```

---

### _templateUrl_ and _restrict_ Options
<br>

- Now put our new directive where the HTML was in `index.html` 

	```html
	<person-form></person-form>
	```
- Remove the obsolete

	```html
	<wdi-first></wdi-first>
	```
	directive that's below the `jumbotron`
	
- Refresh!

---

![](http://www.simpletidings.com/catalog/images/thumb_Oh%20behave.jpg)

---

### Oh, Behave
<br>

- Directives can add "behavior" to the HTML as well.

- For example, think about what `ng-click` does...

- The `link` option in the DDO is where we can add behavior or perform more complex DOM manipulation.

- We assign a function to `link` that accepts several useful arguments provided by Angular.

---

### Oh, Behave

- As an example, let's say our users want all text in an `<input>` to be automatically selected when it is clicked.

- We will create a directive that's added as an attribute to any `<input>` to accomplish this behavior.

	```js
	...
	  .directive('wdiSelText', wdiSelText);
	
	  function wdiSelText() {
	    return {
	      restrict: 'A'
	    };
	  }
	```
	This is a good start, now let's add our `link` function...

---

### Oh, Behave

- Let's enter this `link` function. Don't forget to add a comma after the `restrict` option:

	```js
	  function wdiSelText() {
	    return {
	      restrict: 'A',
	      link: function(scope, element, attrs) {
	        element.on('click', function() {
	          element[0].select();
	        });
	      }
	    };
	  }
	```
	What are we doing here? 

- Now let's test it by adding our `wdi-sel-text` directive to one of the `<input>` elements.

---

![](http://www.cliparthut.com/clip-arts/1269/unicorns-and-rainbows-clip-art-1269538.jpg)

---

### Rainbows and Unicorns

- Take a look at the HTML in `person-form.html`. I don't know about you, but I really dislike having to write this

	```html
  	<div class="form-group">
    	<label for="name">Name</label>
    	<input type="text" id="name" class="form-control" ng-model="person.name">
  	</div>
	```
	every time I want to use a nice Bootstrap `<input>`!
	
- What if we could just write this instead?

	```html
	<input ng-model="person.name" bs-input="Name">
	```
	_Now how much would you pay?_

---

### Rainbows and Unicorns

- Here are the specs for our `bs-input`:
  - Wrap the `<input>` with a `<div>` that has a class of `form-group`
  - Create a `<label>` element with text set to the string in the `bs-input` attribute.
  - Set the `for` attribute on the `<label>` to the value of the `id` attribute of the `<input>`. If `id` does not exists, generate a unique id and set it on the `<input>` as well.
  - Add a `form-control` class to the `<input>`
  - If the `type` of the `<input>` has not been set, add `type="text"` to the `<input>`

- Here's the code...

---

```js

function bsInput () {
	return {
	  restrict: 'A',
	  template: '<div class="form-group" ng-transclude><div>',
	  replace: true,
	  transclude: 'element',
	  link: function (scope, element, attrs) {
	    var label = angular.element('<label>' + attrs.bsInput + '</label>');
	    var inp = angular.element(element.children()[0]);
	    if (inp.attr('id')) {
	      label.attr('for', inp.attr('id'));
	    } else {
	      inp.attr('id', 'id' + scope.$id);
	      label.attr('for', 'id' + scope.$id);
	    }
	    inp.addClass('form-control');
	    if (!inp.attr('type')) {
	      inp.attr('type', 'text');
	    }
	    element[0].insertBefore(label[0], inp[0]);
	  }
	};
}
```

---

### Rainbows and Unicorns

- Before we walk through the code that defines our `bs-input` directive, let's test the sucker out.

- Let's reduce the HTML in `person-form.html` to this:

```html
<div class="row col-xs-4 col-xs-offset-4">
  <h3>Example Form</h3><hr>

  <input ng-model="person.name" bs-input="Name">
  <input ng-model="person.email" bs-input="Email">
  <input ng-model="person.mobile" bs-input="Mobile">

  <button class="btn btn-success">Add Person</button>
</div>
```
and let 'er fly!

---

>_"I'm pretty sure that HTML6 is going under the codename AngularJS"_<br>Scotch on the Rocks, 2013

<br>
#### Questions?

---

## Lab / After Hours
<br>

- Here are a couple of exercises to practice the magic of Angular:<br>
   - Refactor the directive code from this lesson into a module file.<br><br>
   - Write an attribute `swap-colors` directive that swaps an element's `background-color` and `color` properties whenever the mouse pointer is over the element.


