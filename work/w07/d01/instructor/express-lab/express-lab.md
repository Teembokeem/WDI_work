![](http://www.softwaresecured.com/wp-content/uploads/2015/04/express-js.jpg)

# Express Practice/Lab/After Hours
---

## Intro

It's been a long day and you've covered a lot of ground.

It's natural, in fact, **expected**, to feel "uncomfortable" and confused by Node.js & Express at this point.

As always, the journey toward competence requires practice - so let's get on with it!

## Exercise

>This exercise can be worked on in pairs/groups.

The goal of the exercise is to continue to build-out your `first-express` app to include full RESTful CRUD on `todos`.

#### Hints:

1. If feeling overwhelmed, be sure to isolate tasks into smaller, more manageable chunks.

2. Start with defining the routes. Remember to make them RESTful!

3. Fancy styling in your views is not a priority, but feel free to make your app look great if you have the time.

4. There are no Rails helpers like `form_for` or `link_to` available in your templates. However, those helpers simply spit out HTML, so you get to write the HTML directly!

5. If you can't remember how to write a HTML `<form>`, `<a>`, etc., I recommend:
	- Inspecting the HTML sent over by the views in your Rails apps for guidence.
	- Google for docs, StackOverflow, tutorials, etc.

6. Be sure to include full HTML document boilerplate in each EJS template file - remember, there is no "layout" file like in Rails!

7. Remember to require the `todos` module wherever needed - it is a proxy for a database.

8. Like in Rails, RESTful CRUD requires certain requests to simulate HTTP `PUT` and `DELETE` methods. For this, your app will need the [method-override middleware](https://github.com/expressjs/method-override?_ga=1.86160592.957573653.1456704853). For the easiest way to use it, follow the example shown in the **override using a query value** section of the docs.

## Bonus

- Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson).

- Include Bootstrap, or another CSS framework, if you want your app to look sweet like bear meat.
