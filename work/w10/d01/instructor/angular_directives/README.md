# Tilda Swinton's Advice on this Chaotic Life

![Tilda Photo](http://www.narniafans.com/wp-content/uploads/2010/06/vdt-narniafans311.jpg)

## Angular Directives

| Lesson Objectives                        |
| :--------------------------------------- |
| Use ng-repeat to iterate over data       |
| Bind data using ng-bind & `{{}}`         |
| Use ng-if & ng-class to hide and how elements |
| Use ng-form to build forms               |
| Explain the parts of `ng-class`          |


#### Road Map
1. What is life? And while we're at it, what are directives?
2. Tilda's Hints - What are We Doing Here?
3. Tilda's Chaotic Repetition - Using `ng-repeat`
4. Tilda's Mind Never Quits - Adding More Tilda Hints
5. Tilda Remembers, Tilda Forgets - Using `ng-model`
6. Tilda's Secrets
7. Oh... That's not Tilda...
8. Incorporate the Hints Anyway!
9. Conclusion


## What is Life? And While We're at it, What are Directives?

> "One week ago I tucked a small seed into the pocket of my cheek with 
> a pinch of dirt.  I feel it sprouting more everyday.  Life is 
> constant."
>
> -- _Tilda Swinton_

Directives are additional DOM nodes (think custom attributes on HTML tags) that
Angular uses to apply behaviors to HTML elements. Angular comes with a bunch of
built-in directives for a variety of behaviors; it also gives you the ability to create
your own directives for custom behaviors!

There are a few you'll be using all the time that we're gonna walk through
together today. There are also a few you've already used – `ng-app` and
`ng-controller`. You added them onto HTML tags to tell your Angular app what
module we were using and what controller we wanted to ask for data from. Those
are two examples of specific behaviors so let's see a few more.

## Tilda's Hints - SwHINTons

> "I hate to reveal this, but I know the precise moment in which 
> everyone on earth will die. I have it written on the inside of my 
> forehead."
>
> -- _Tilda Swinton_

Today we're taking some of [Tilda Swinton](https://twitter.com/nottildaswinton)'s
most prophetic thoughts and turning them into an Angular application.
We'll have an array of SwHINTons, demonstrate some hiding & showing 
mechanisms built into Angular, and bind some changing data via a form.

Copy `starter/` out of the instructor folder and serve up the website (type `server` into your terminal). From inside `angular_directives/`: 

`$ cp -R starter ../.. && cd ../../starter && server`

Take a minute to read through the starter code.

## Tilda's Chaotic Repetition

> "If you will it, you, too, can be birthed, devoured, then birthed 
> again by a starving coyote. It's a wonderful thing."
>
> -- _Tilda Swinton_

Let's begin by setting up our controller and incorporating some of 
Tilda's greatest hints as seed data:

```javascript
(function() {
  'use strict';

  angular
      .module("hintApp")
      .controller("HintsController", HintsController);

  HintsController.$inject = [];

  function HintsController() {
    var vm = this;

    // seed data from the mind of Tilda
    vm.allHints = [
        {
        	id: 0,
        	wisdom: "Not blinking isn't an option, but an advantage.",
        	incorporated: false
        },
        {
        	id: 1,
        	wisdom: "You should only practice throat singing in the evening, when the sunlight is amber.",
        	incorporated: false
        },
        {
        	id: 2,
        	wisdom: "The eclipse can give much power.",
        	incorporated: false
        },
        {
        	id: 3,
        	wisdom: "Walk until no matter encroaches upon you. Shed your clothes and lay here. You are lonely/complete.", 
        	incorporated: false
        }
    ];
  }
})();
```

Stupendous! We now have an array of objects called `allHints`. 

> ¿¿¿ What do we need to do in our HTML file to activate our Controller ???

#### Side Note: Options on Binding Data

While we will generally use `{{ }}` to bind data, we also have the option of `ng-bind`. Let's use `ng-bind` to bind the length of our array of hints to the subtitle `h5` tag.

```html
<h5 class="shade">You have 
	<span ng-bind="vm.allHints.length"></span> 
                  hints to incorporate into your chaotic life!</h5>
```

The primary difference between the two, is that on a page load, the data that is brought in via `{{ }}` can show for a brief moment at the beginning. If it's important to you, you can always include `ng-cloak` along with `{{ }}`, and it will work indentical to ng-bind.

#### `ng-repeat`

This is an incredible directive that you will undoubtedly use all the time. We can list Tilda's hints with ease!

```html
<ul>
  <li class="hint shade" ng-repeat="hint in vm.allHints">
    {{hint.wisdom}}
  </li>
</ul>
```

`ng-repeat` is used for iterating over repeating elements. Rather than a lousy `for` loop, Angular uses `ng-repeat` on the element we want to iterate over. Think of it as a fat-cat, HTML version of `forEach`.

We've followed up the `ng-repeat` with the data we want printed.

## Tilda's Mind Never Quits - Adding a Hint

![Tilda](http://dl9fvu4r30qs1.cloudfront.net/ea/17/ae0961f1485699634946a0e76e9b/tilda-swinton.jpg)

> "Look at me. Take this with you: no one will ever gaze at you the 
> same. This is our bond. Also-take my eyeballs; my new ones are 
> coming in."
>
> -- _Tilda Swinton_

Angular is known for its _two-way data binding_ - in order to further understand the idea, we'll need to create some methods in our controller...

```js
vm.addHint = addHint;

function addHint() {
  vm.allHints.push({
    id:           4,
    wisdom:       "I am, have always been, and will forever be, negative 1 years old.",
    incorporated: false
  });
}
```

... then add a neat new ng-directive that Tilda would clearly approve of: `ng-submit`. 

```html
<form ng-submit="vm.addHint()">
	<input id="darken-text" class="shade" type="text" placeholder='But think...'>
</form>
```

We can officially start adding Tilda-bits of wisdom! 

As soon as you press enter, it __auto-updates the list__ with our pre-written swHINTon and the count at the top of the page, without any of the extra code something like jQuery would force us to write.

##### Angular is watching for changes to our data in the controller and updating the view for us!

## Tilda Remembers, Tilda Forgets - `ng-model`

> "I bound my limbs, released myself to ocean tides. Trust brought me 
> back to shore. I then coughed up a piece of bark; I am wearing it 
> now."
>
> -- _Tilda Swinton_

Now we just saw _data-binding_ in action, but what's the good of adding only dummy data from our js file? And what's all this __two-way data binding__ I keep hearing about?

![Two-Way Data Binding](https://docs.angularjs.org/img/Two_Way_Data_Binding.png)

In the same way that Angular watched for changes in our data in the controller and updated the views, the reverse is true as well!

Let's see how that works in practice. We need to take whatever is in our input and send _that_ to our `addHint` function. We'll do so using another directive: `ng-model`.

However, before we get to the directive, let's build what we need in our controller.

Each new hint is a JS object like this:

```js
{
	id: 0,
	wisdom: "A bonafide Tilda Sw-HINT-on",
	incorporated: false
}
```

In order to have access to this kind of skeleton, we could make a `newHint` object in our controller.

```js
vm.newHint = {
	id: 0,
	wisdom: "",
	incorporated: false
}
```

We would also need to alter our previous `addHint` function:

```js
vm.addHint = addHint;
vm.ids     = 4;

function addHint() {
  vm.allHints.push({
    id:           vm.ids,
    wisdom:       vm.newHint.wisdom,
    incorporated: false
  });
  vm.ids++;
  vm.newHint.wisdom = '';
}
```

Now we have the ability to add new SwHINTon data on both the view and controller with the `.addHint` function. But we need to access it! This is where another awesome directive comes into play – `ng-model`.

In `index.html`:

```html
<form ng-submit="vm.addHint()">
  <input ng-model="vm.newHint.wisdom" id="darken-text" class="shade" type="text" placeholder='But think...'>
</form>
```

What does `ng-model` do? It binds the data not just from the controller to the view like we saw earlier but the other way around, too. This is __two-way data binding__! As we type in our input, the actual object of `newHint` changes, specifically the `wisdom` attribute inside that object.

Let Tilda prove it to you!

```html
<form ng-submit="vm.addHint()">
  <input ng-model="vm.newHint.wisdom" id="darken-text" class="shade" type="text" placeholder='But think...'>
</form>
<p class="shade">Considering this hint: <strong>{{vm.newHint.wisdom}}</strong></p>
```

As you can see, the data is synced in (nearly) real time!

#### More on `ng-model`

You don't actually need a "skeleton" for data in the controller. You can actually accomplish the same thing without a `newHint` object in your controller.

However, you must can still refer to this mystery object within your controller and view! This goes against most of what you know about JavaScript, but I assure you, Angular sorts it out through it's magic. Simply by attaching:

```html
<form ng-submit="vm.addHint()">
          <input ng-model="vm.newHint.wisdom" id="darken-text" class="shade" type="text" placeholder='But think...'>
        </form>
        <p class="shade">About to incorporate hint:
          <strong>{{ vm.newHint.wisdom }}</strong>
		</p>
```

We can now call to `vm.newHint` in our controller without ever instantiating it!

Try it out - delete the skeleton from your code!

## Tilda's Secrets

![](http://animalnewyork.com/wp-content/uploads/david-bowie-tilda-swinton.jpg)

> "Hide in the darkest room of your home. When someone opens the door 
> to find you, say nothing-greet them only with the glow of your wide 
> eyes."
>
> -- _Tilda Swinton_

Angular also has it's own form of `if` statements.

Using `ng-if`, let's make that paragraph only show if newHint _is not_ empty. 

```html
<p class="shade" ng-if='vm.newHint.wisdom'>Considering this hint:
  <strong>{{vm.newHint.wisdom}}</strong>
</p>
```

## Oh... That's not Tilda...
> "I've never said any of that ridiculous nonsense in my life. That's 
> just a couple of bros that don't understand my work. Please – I'm a
> serious actress."
>
> -- _actually Tilda Swinton_
>
> "Oh... my bad.... I love your work!......."
>
> -- _...Ezra_

So turns out that twitter account is __@notTildaSwinton__. Well, let's work in a delete function using `ng-click`.

First, as always, we need to make the function in our controller:

```js
vm.addHint = addHint;
vm.ids     = 4;
vm.newHint = {id: 0, wisdom: '', incorporated: false};
vm.remove  = remove;


function remove(removeHint) {
  vm.allHints = vm.allHints.filter(function(hint) {
    return hint.id != removeHint.id;
  });
};
```

And now lets add the `ng-click` method to the 'X' button we've already created in `index.html`

```html
<button class="destroy" ng-click="vm.remove(hint)">X</button>
```

We've officially avoided any lawsuits from Tilda Swinton! Hooray!

## Incorporate the Hints Anyway!

> "How often do you change your legs, Tildren? I find I must replace 
> mine almost every week.  Perhaps I should trek less."
>
> -- _not Tilda Swinton_

Just because these words of wisdom aren't from the true Queen Tilda, it doesn't mean we should ignore the sage advice.

We'll use another directive called `ng-class`.

```html
<div ng-class="{'class-name': expression}">
	...content...
</div>
```

If the condition of the expression in `ng-class` is truthy, then the class will be added.

#### Solo Time!

Take 10 minutes to incorporate the final part of our app!

Use what you've learned to add and remove the `'incorporated'` class to the `<li>` when you _click_ the `<span>` tag containing the `hint.wisdom`.

Additionally, change the value of the `vm.allHints.length` to the number of hints _left to incorporate into your chaotic life_. Hint: you might need to write a function for this in your controller...

## Conclusion

> "I found a fish out of water. The lifepaths of others are not mine 
> to bend, but I laid with her in her puddle so she would not expire 
> alone."
>
> -- _not Tilda Swinton_

- How do we attach a function to a controller?
- How do we iterate over an array of items?
- How do we submit a form?
- What are the parts of an `ng-class`?