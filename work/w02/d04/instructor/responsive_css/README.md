# The Billy Mays Tribute Salesmen Collective

![Billy Mays](http://www.tampabay.com/resources/images/dti/rendered/2008/06/b4s_bug060608_26262a_8col.jpg)

## Responsive CSS

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Describe media queries and how to write them |
| Create rules that adjust styles for phones, tablets, and computers |
| Describe mobile first design             |
| Use `display:flex` for a responsive design |
| Manipulate flexible boxes with `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, and `align-content` properties |

#### Road Map

1. Billy Mays Here - Intro to Responsive Website Design
2. Using Floats with Navbars
3. Media Queries & Max/Min Width
4. Using the Flex Box
5. But Wait, There's More!

## BILLY MAYS HERE!

> ARE YOU TIRED OF YOUR DESIGNS GOING DOWN THE TUBE AS SOON AS SOMEONE OPENS UP YOUR WEBSITE ON A PHONE!?!?!?!?!
> 
> WELL, THROW THOSE WORRIES OUT THE DOOR!
> 
> WELCOME TO RESPONSIVE CSS!

![](http://api.ning.com/files/Kk19*2P3xgYqiykJv8EedsK8vZPAaTdJWxTjdO7cYG6obt10sE-tzo0IKGJqFHkfSFqP2-KSn8BJHaV9CnhOfB*Kkzs*ZOX*/BillyMaysPWNSGod.JPG)

#### Intro to Responsive Website Design

Once upon a time, long, long ago, nearly every screen was either 640x480, 800x600, or 1024x768, and you could expect that people had most of their screen occupied by a broswer window.

Those were the good old days when Billy Mays (RIP) was still slinging his helpful wares. It's up to us as part of the Billy Mays Tribute Salesmen Collective to followin his footsteps and spread the good word on responsive design.

Now, people will be looking at our websites on phones, tables, browser windows scrunched up all tiny, and maybe even watches (please remember this lesson; it'll be funny to go back and read this README in a few years and ask: "Who the hell is Billy Mays??"). 

You can compare the difference - just resize the width of your browser window:

- [Limited Responsiveness](https://streetcleaner.bandcamp.com/album/payback)
- [Fully Fledged Responsiveness](http://www.piedpiper.com/)

It's your responsibility, as the web developer, to make your site work as well as you can for as many people as you can– including people viewing on phones, tablets, and yes, even watches.

#### Mobile First Design

Due to the rise in use of these alternatives, many developers have considered planning for the smaller devices before they design for the desktop. 

Why? Lets look at a few facts (taken from codemyviews.com):

- There are over **1.2 billion** mobile web users worldwide
- In the U.S., 25% of mobile Web users are mobile-only (they rarely use a desktop to access the web)
- Mobile apps have been downloaded 10.9 billion times
- Mobile device sales are increasing across the board with over 85 percent of new handsets able to access the mobile Web

Due to these reasons - and big shot, Eric Schmidt claiming it was the future for Google - a lot of people are considering this a viable option.

Now there are plenty of positives and negatives to each design approach, but they boil down to this  pithy saying: ***Graceful Degradation vs. Progressive Enhancement***.

**Graceful Degradation**: Desktop first. Explore the full capabilities of a desktop and remove selectively, cutting away the fat and leaving an elegant core.

**Progressive Enhancement**: Mobile first. Start with the most core features first, then add features as they become necessary.

For the most part, *mobile first design is "better"*.

I put this in quotes because while it makes you solve the difficult task of a responsive design with a limited real estate first, **it makes you solve the difficult part first**.

Solving the limiting, difficult aspects first can be a negative for creativity! Some developers feel it gets in the way of their best design motives.

Since we're learning, we'll be doing today's lesson as a *Graceful Degradation*, but stay open to the idea of mobile first design in future projects.

##### Assets for Lesson

Go ahead and copy the `starter_code/` directory out of the repository. We'll be working in that for the class.

## Navbars with Floats

Floats are the old school method to creating a well-spaced, responsive navbar. Recall that floats and clears are used in tandem to place html elements to the left or right of a webpage.

Therefore, we're going to need a fair amount of margin and padding play to figure out the best spacing for our navbars.

Lets look at the top navbar in the `starter_code/`.

First, lets isolate and examine the code already written for our website:

``` CSS
/* Top Navbar */

nav {
  max-width: 90%;
  margin: 0 auto;
}

nav ul {
  padding: 0;
  margin: 0 auto;
}

/* Large Header */

header {
  clear: both;
  continued…
}
```

We've centered the `<nav>` and `<ul>` element, given it a maximum width of 90% of the page, and removed any additional padding inserted by the browser.

Be aware that the element beneath the navbar has already been given a clear.

In order to space our page correctly, and get the navbar to move with the resizing of the window, we'll have to add floats to our elements. First, lets center our `<li>` elements by accessing the class `.nav`, and change it's display to `inline-block`.

``` CSS
nav .nav {
  display: inline-block;
  margin: 20px auto;
}
```

We're changing the display to ease our use of floats. Now, we'll float the `.nav-strong` element left, and the `.container-ul` right. We then must float all the `.nav-menu-items` left so they don't display in reverse on our document.

We'll need to add padding to the left of each of the `.nav-menu-items` `<li>` elements so they don't bunch up on one another.

``` CSS
nav .container-ul {
  float: right;
}

nav .nav-menu-items {
  float: left;
  padding: 0 0 0 20px;
}

nav .nav-strong {
  float: left;
}
```

Now, you'll see that the navbar elements will respond well to the resizing of the browser (until the browser is under about 600px...).

## Media Queries and the Min/Max Width

Let's get that top Navbar to stack above our `<header>` when the webpage has a width under 600px.

To do this, we'll need to use a **media query**. 

> "A media query consists of a media type and at least one expression that limits the style sheets' scope by using media features, such as width, height, and color."
> 
> — Thanks MDN

Essentially, you're telling the webpage to treat content differently according to a certain property.

In general, this is used with the max or min-width property. Let's see how we'd use a media query and the max-width property to change our navbar when the screen is less than 600px:

``` CSS
/* ------------- */
/* Media Queries */
/* ------------- */

@media (max-width:600px) {
  nav .nav {
    display: block;
    float: none;
  }

  nav .container-ul {
    float: left;
  }

  nav .nav-menu-items {
    padding-left: 0;
  }
}
```

Notice how the navbar stacks when we skinny the webpage. We had to float it left because before it was pushing to the right side.

Take note of the `<header>`'s use of the `max-width` property as well.

``` css
header {
  clear: both;
  position: relative;
  margin: 0 auto;
  text-align: center;
  background-color: navy;
  max-width: 90%;
  max-height: 920px;
  border-radius: 20px;
  color: white;
  font-family: Cabin Condensed;
}

header img {
  border: 1px solid white;
  border-radius: 20px;
  margin: -10px 0 -10px 0;
  max-width: 90%;
}
```

This is why the image and header shrink with the page (as well as the `max-height` property in the `<header>`).

## Using the Flex-Box

Floats are annoying. Flexible Boxes are significantly less annoying.

> "[The FlexBox] aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex")." 
> 
> — CSS Tricks

Flexboxes are best at dealing with small portions of an application rather than entire webpages.

Things like small media objects and navbars are perfect for flexboxes, as they deal with the shifting sizes of a webpage much better than any block, inline, or inline-block element.

Unfortunately, the flexbox has too many feautres for us to go through every single one, but we're going to try and hit the essentials.

First, there are two major families of flexbox properties: *parent and child*.

The parent properties go on the enclosing box. They determine how the children will interact with each other.

The child properties isolate one element *inside* the flexbox. These will change how that one child element will act in regards to its siblings.

Let's use a [flexbox property demonstrator](http://codepen.io/justd/pen/yydezN?editors=1100) to understand what options are available to us with `display: flex`.

#### Parent Flex Properties

| Parent Property | Definition                               |
| --------------- | ---------------------------------------- |
| flex-direction  | Row or column - reverse or natural flow. |
| flex-wrap       | If the contents are too wide, they can `wrap` or `wrap-reverse` |
| justify-content | Determines horizontal flow.              |
| align-items     | Determines vertical flow.                |
| align-content   | Affects the flow when things wrap.       |

#### Child Flex Properties

| Child Property | Definition                               |
| -------------- | ---------------------------------------- |
| order          | Default is 0. Positive numbers will go last, and negative first. |
| flex-grow      | Controls the ratio of the amount of space an element will grow in a flex box. |
| flex-shrink    | Like flex-grow, but with making the element smaller. |
| flex-basis     | Becomes the standard for the size of the element before the child elements grow. |
| flex           | Takes three parameters: combo of flex-grow, flex-shrink and flex-basis. |
| align-self     | Allows the default alignment to be overridden for an individual flex item. |

#### Try out the FlexBox with Our Media Objects

Now that we're a little familiar with the flex-box, let's see it in action!

Lets first change that `<main>` element and the 3 enclosing `<div>`.

``` CSS
/* ------------------ */
/* Using Display Flex */
/* ------------------ */

main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

main > div {
  max-width: 260px;
  padding: 5px;
}
```

Now we can see the three elements dynamically wrap as soon as the webpage gets thinner.

#### Navbar with Flexbox

Sometimes isolating children of the flex-box is extremely necessary. Below is an example of a navbar made using `display:flex`. 

Look how the use of `flex-grow` allows the title to command the majority of real-estate on the navbar.

``` css
/* ------------------- */
/* Navbar with FlexBox */
/* ------------------- */

footer > ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 0 0 10px 0;
  padding: 0;
}

.flex-grow-class {
  padding: 8px;
}

.flex-grow-class:nth-child(1) {
  flex-grow: 1;
}

@media (max-width:600px) {
  footer > ul {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

Take note of the media query used here: we're changing the direction to columns instead of row so they stack in the same fashion as our navbar at the top of the page.

## But Wait, There's More!

You are now an honorary Billy Mays Tribute Salesperson. Please share your responsive wares across the Internet responsibly.

But a few questions before we leave:

1. What is mobile first design and how does it relate to responsive CSS?
2. Explain the differences between `align-content`, `align-items`, and `justify-content`.
3. What's the difference between a flex child and flex parent attribute?

#### References

[Mobile First Design: Why It’s Great and Why It Sucks](https://codemyviews.com/blog/mobilefirst)

[MDN Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[CSS-Tricks Complete Guide to FlexBoxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox Properties Demonstration](http://codepen.io/justd/pen/yydezN?editors=1100)

[CSS FlexBox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[CSS FlexBox Practical Examples](https://www.youtube.com/watch?v=H1lREysgdgc)

[Using Modernizr with Flexbox](http://zomigi.com/blog/using-modernizr-with-flexbox/)