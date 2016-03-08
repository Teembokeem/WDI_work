# Make Me Bootsy, Baby

![Bootsy Baby](http://2ap6ndle7dn3hxy4u3p0d587.wpengine.netdna-cdn.com/wp-content/uploads/2010/11/bootsy-collins-bootzilla.jpeg)

## Todo App Using Underscore Templates

| Lesson Objectives: SWBAT                 |
| ---------------------------------------- |
| Use the LoDash library to place dynamic parts of HTML |
| Use EJS templates                        |
| Build a full "MEN" stack app             |
| Use AJAX calls within a full stack application |

#### Road Map

1. It's Bootsy, Baby!
2. Pre-planning
3. Server-Side Templates v. Client-Side Templates
4. Things We Gotta Know
5. Let Us Begin!

## It's BOOTSY, Baby!

![](http://okp-cdn.okayplayer.com/wp-content/uploads/2014/09/JBsPhoto.jpg)

Today we'll be building a Todo app all about [Bootsy Collins](https://en.wikipedia.org/wiki/Bootsy_Collins), The Man Who Put Bass In Yer Face (back left, here seen in the JBs).

As a lousy bass player, I always wondered, how did Bootsy get so dang good at bass?

As a poor dresser, I always wondered, how did Bootsy get so dang good at dressing himself?

As a poor chiller, I alwasy wondered, how did Bootsy chill so dang hard!?

Quickly, I realized I needed an application that would help me become more like Bootsy Collins. Could you build me a todo app that could help me lead a more Bootsy lifestyle?

## Pre-Planning

Let's quickly look at what the final app will resemble.

**Home Page**: No data is being pulled from the DB.

![home page](./public/readme_images/home_page.png)

**About Page**: Needs only the amount of todos in the db - should be solved by server-side templating.

![about page](./public/readme_images/about_page.png)

**Todos Page**: This page needs a significant amount of data to CRUD our Todo resource. Additionally, if we're planning to handle CRUDing between page-loads, we'll need client-side templates with LoDash. 

![todos page](./public/readme_images/todos_page.png)

#### Take 5 minutes to review the code.

Things to note from photos:

- The navbar elements' bottom-border changes when on its corresponding page (**HINT**: Using the custom - written by me - class name `selected`)
- In the todos page, when a Todo is clicked, it moves to the "Baby, I Gotta…" field.
- Each todo has a bootsy level, from 0-5. The color of the hint corresponds to the level.
  - Bootsy Level 0: No background color, class name `bootsy0`
  - Bootsy Level 1: Blue background, class name `bootsy1`
  - Bootsy Level 2: Green background, class name `bootsy2`
  - Bootsy Level 3: Brown background, class name `bootsy3`
  - Bootsy Level 4: Red background, class name `bootsy4`
  - Bootsy Level 5: Gold background, class name `bootsy5`

## Server-Side Templates v. Client-Side Templates



## Things We GOTTA Know!

Delimiters.

Some stuff about JQuery UI draggables



## Let Us Begin!

We'll be building this app for the remainder of the day. Here's how I expect we'll start:

1. Set up the back-end to ensure we are delivering data.
   - Create a todo model
   - Set up our Todo controller
   - Set up our routes
   - Ensure we can persist and access data using Postman
2. Build our templates
3. Build our scripts to fill said template
   - Set up AJAX calls to gain access to data
   - Attach data to templates
4. Bring it all together and do a bit of styling
   - Use provided css classnames to style page
   - Improve UI by incorporating Drag and Drop with JQuery UI

Today's going to be a busy day, so enjoy your break and then lets get to it.

##### References

[A closer look at Underscore templates](http://www.2ality.com/2012/06/underscore-templates.html)

[Using Underscore.js Templates To Render HTML Partials](http://www.bennadel.com/blog/2411-using-underscore-js-templates-to-render-html-partials.htm)