# Ric Flair's SASSy Stylist

![rick flair](http://www.geek.com/wp-content/uploads/2015/09/ric-flair.jpg)

## CSS Preprocessing with SASS

| Learning Objectives: SWBAT               |
| :--------------------------------------- |
| Explain use cases for CSS Preprocessors  |
| Use SASS to cut down on styling time     |
| Create variables in their SASS files     |
| Nest their CSS in a way reminisicent of HTML hierarchy |
| Import partials into their CSS files     |
| Describe use cases for mixins            |
| Use @extend to expand their inheritance  |
| Use operators in their scss files        |

## Roadmap

1. Intro to SASS - Too Much $$$, Not Enough Time
2. Installing SASS - Hire Ric Flair's SASSy Stylist
3. Working with Variables - What Color Works for You?
4. Nested CSS
5. Partials and Imports - Going to Your Stylist's Shop
6. Mixins 
7. Inheritance - Extend your Inheritance, Moneybags!
8. Operators - Mathematically Stylish
9. Practice - Make yourself a Stylin' Suit!
10. Outro

## Intro to Sass

![Flair Meme](http://images2.miaminewtimes.com/imager/lebron-james-ric-flair-created-swag/u/original/6553499/ric_flair_interview_pic_medium_1.jpg_462_308_pixels.jpg)

### Too Much $$$, Not Enough Time

You're all mega-wealthy developers that just sold their first company for a stupid amount of money. You want to look the part, but it's tough to find time to buy clothes when you're busy coding all day.

That's when you run into Ric Flair's personal stylist from the 80's, SASS!

#### What is SASS?

Stylistically Awesome Style Sheets!

SASS is a CSS extension language. It allows users to utilize dynamic  features that don't currently exist in CSS. You can use:

- variables
- nesting
- mixins
- inheritances
- Math operators

Your preprocessed Sass (.scss) file is saved as normal CSS that is utilized on the web site.

## Installing SASS

![](https://theinfamousjcity.files.wordpress.com/2011/07/ric-flair-is-broke-as-fuck.jpg)

#### Hire Rick Flair's SASSy Stylist

To use SASS, we have to "hire" it. Here's how we include sass on our computers: 

`sudo gem install sass`

We can check the version:

`sass -v`

##### Create a Watch on SCSS files

Open up the starter code.

`scss` files will create new css files for us. We use SASS so we can write shorthand, and when we're ready to display our site, it's created our css for us.

Inside your css folders, `touch flair.scss`.

Now lets set up the watch.

`sass --watch flair.scss:output.css`

In the terminal, you'll see that there is a listening warning - SASS will stay alert looking for changing you make in the `scss` file and write them directly into your output file.

Therefore, we must link our html to the output file.

## Working with Variables

![Flair](http://www.piz18.com/wp-content/uploads/2011/10/wwe-ric-flair.jpg)

### What Color Works for You?

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. 

As we know, Nature Boy loved to constantly change his colors.

``` scss
$main-font:  Calligraffitti, monospace;
$text-pink: #ff00ff;
$body-pink: #ffe4c4;
```

> Replace #ffe4c4 with $body-pink
> 
> Set `.flair-body` to $text-pink.
> 
> Add $main-font to the h1 tag

## Nested CSS

![Nested](http://www.wrestlingmedia.org/wp-content/uploads/2009/04/shawn-michaels-vs-ric-flair1.jpg)

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. 

Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

**Let's change the ordering of our flair person!**

``` css
.flair {
  margin: 2em;
  margin-top: 100px;
  display: inline-block;
  width: 200px;
  height: 300px;
  position: relative;
}

.flair div {
    background: url('') no-repeat center center;
    border:1px dashed blue;
}

.flair-head {
    width: 40%;
    height: 20%;
    margin: 0 auto;
    transform-origin: 50% 100%;
}

.flair-body {
    width: 60%;
    height: 40%;
    margin: 0 auto;
    position: relative;
    z-index: 200;
}

.flair-arm {
    width: 15%;
    height: 40%;
    position: absolute;
    top: 20%;
}    

.flair-arm-l {
      left: 10%;
      transform-origin: 60% 12%;
}

.flair-arm-r {
      right: 10%;
      transform-origin: 40% 12%;
}

.flair-leg {
    width: 15%;
    height: 40%;
    position: absolute;
    top: 55%;
    transform-origin: 50% 0%;
}

.flair-leg-l {
      left: 30%;
}

.flair-leg-r {
      right: 30%;
}
```

Will become this:

``` scss
.flair {
  margin: 2em;
  display: inline-block;
  margin-top: 100px;
  width: 200px;
  height: 300px;
  position: relative;

  > div {
    border:1px dashed blue;
  }

  .flair-head {
    width: 40%;
    height: 20%;
    margin: 0 auto;
    transform-origin: 50% 100%;
    background-color: $body-pink;
  }

  .flair-body {
    width: 60%;
    height: 40%;
    margin: 0 auto;
    position: relative;
    z-index: 200;
    background-color: $body-pink;
  }

  .flair-arm {
    width: 15%;
    height: 40%;
    position: absolute;
    top: 20%;
    background-color: $body-pink;


    &-l {
      left: 10%;
      transform-origin: 60% 12%;
    }

    &-r {
      right: 10%;
      transform-origin: 40% 12%;
    }
  }

  .flair-leg {
    width: 15%;
    height: 40%;
    position: absolute;
    top: 55%;
    transform-origin: 50% 0%;
    background-color: $body-pink;

    &-l {
      left: 30%;
    }

    &-r {
      right: 30%;
    }
  }
}
```

#### Difference between `>` and `&`

The `&` tells sass to pull the entire parent selector into where you place this beautiful little ampersand. Now, you won't need to rewrite the names of parent classes!

The `>` is used for all children of the element - this is actually a feature of CSS. Whitespace (` `) will implement the rules for all descendants of that element or class.

#### Practice Nesting

> Change the following into nested SASS

``` scss
#basic div {
     border-radius: 20%;
}

#basic .flair-head {
     border-radius: 50%;
}
```

## Partials and Imports

### Going to Your Stylist's Shop

Maybe you need to meet up with your stylist. SASS's place has a border. There's an easy way to make big changes quickly using other scss files as partials.

Name partials with the _partial.scss - use the underscore!

First, let's `touch _newstyle.scss`

Now let's create the working space of a new stylist.

``` scss
/* _newstyle.scss */

body {
	border: 10px solid red;
}
```

And now we import it into our css by including it in our scss file

``` scss
/* flair.scss */

@import 'newstyle';

html, body {
  height: 100%; 
}
```

#### Why would I ever use this!?

If you're in a company with a very intricate website, the css files can get EXCRUCIATINGLY long. By using partials, you're modularizing your stylesheets!

## Mixins

![Ric Mixin](http://culturecrossfire.com/wp-content/uploads/2013/12/Flairwcw.jpg)

Mixin in programming is a special kind of multiple inheritance. You use it when:

- You want to provide a lot of optional features for a class
- You want to use one particular feature in a lot of different classes
- Especially useful for dealing with different browser types!

Let's add a `border-radius` to our _newstyle.scss file.

``` scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
		
body { 
	@include border-radius(10px);
}
```

> Can you think of other places where we may want to use a mixin?

## Inheritance

### Extend your Inheritance, Moneybags!

Sure you stack mad dollars, but sometimes that stackin' can get tiring. Luckily, SASS lets you spend your money once, and lets other things inherit the same looks.

We'll have do something rather silly to demonstrate this with the starter code I've given.

Let's create another class called `example` on the div#basic.

Now let's cut out the `display: inline-block;` from `.flair` in `flair.scss`

Let's add in:

``` scss
.example {
	display: inline-block;
}
```

Finally, let's `@extend` the class to `.flair`.

``` scss
.flair {
  @extend .example;
  …
```

This can save a mountain of code (and therefore your dollars) if used appropriately.

## Operators

![](http://i.ytimg.com/vi/zJ-eidEY_vc/maxresdefault.jpg)

### Mathematically Stylish

Using SASS, we can actually style with operators. This makes responsive CSS much easier to write, especially when combining absolute and relative positioning.

We'll show how it works by manipulating Ric's arms. We know they've gotten significantly smaller in hs older age (despite all that juice).

Let's change the width in the .flair-arm

``` css
  .flair-arm {
    width: 15%;
    height: 40%;
    position: absolute;
    top: 20%;
    background-color: $body-pink;
```

to:

``` scss
  .flair-arm {
    width: 15px / 200px * 100%;
    height: 40px / 100px * 100%;
    position: absolute;
    top: 20%;
    background-color: $body-pink;
```

You'll see that the height stays the same, but the width gets smaller as Ric passes the 60 year mark.

## Practice!

### Make Yourself Stylin'!

You now know the basics of SASS. Go ahead and make youself a crazy stylin', profilin' look with SASS!

- use variable colors to perfect your look
  
- alter your nesting if you'd rather have things take from other 
  
  parts of the body.
  
- Try and use mixins, partials, and inheritance to make big changes
  
- Exchange the percentages with math operators to get a bodytype that
  
  looks more like you!

__Bonus:__ Rewrite as much as you can as variables!

## Outro

You're now a stylin', profilin', jet flyin' mega-dev with mucho macho SASS skillz!

Let's go over what we've learned:

1. What a use case for mixins?
2. Why are partials so helpful for large code bases?
3. What is `@extend` used for?

#### References

[Sass Basics](http://sass-lang.com/guide)

[Understand SASS from a Dev POV](http://alistapart.com/article/getting-started-with-sass)