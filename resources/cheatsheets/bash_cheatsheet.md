#  CHEATSHEET for  BASH, HTML5, and CSS3

**The last list you will ever need**

# B A S H

###Opening active directory in sublime

```
subl .
```
###Find usage info for any command
```
man _
```
### Long detailed list of all files in active directory
```
ls -la or ll
```
###Altering/Updating Unix Shell via .bash_profile
```
ll on home dir. Then subl .bash_profile
```
###File Manipulation
Moving files and Directories (and Renaming)

```
mv file
```
Copying files and Directories

```
cp for Files
cp -R for Directories
```
Deleting files and Directories

```
rm -r for Files
rm -R for Directories
(! rm -rf deletes everything)
```

###Making new files or directories

```
touch [filename] for Files
mkdir [dirname] for Directories
```

###Printing out in terminal

```
pwd for current address
cat for text file readout
```
-
# HTML5
[MDN HTML5 ELEMENT REFERENCE] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[MDN HTML5 ATTRIBUTE REFERENCE] (https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

##The Doctype, `<head>` and `<body>`
### Doctype

`<!DOCTYPE html>` belongs at the top of each of your html pages. This informs the browser that this file is written in HTML.
### `<head>`

The `<head>` tag provides all general information (metadata) for the webpage. For instance, in the bit of code above, we're setting the character encoding to 'utf-8' (the dominant character encoding for the internet, made to be backwards compatible with ASCII), telling the browser if the page is supported by it, and setting our title.

Other common parts of the `<head>` are attaching stylesheets (`<link>`), libraries, and scripts (`<script>`).

### `<body>`

The `<body>` tag contains all our content. It contains the majority of what we see on the page.

## Structural HTML Tags
### Content Tags

Lets take a tour of content tags:

####`<h1>...<h6>`

Headers, going from biggest(`<h1>`) to smallest (`<h6>`).

####`<p>`

Paragraph tag. Put your prose in the `<p>` tag!

####`<span>`

The span tag is unique in that it's generally used to highlight a small section of writing (a generic inline conatiner). This is most commonly used in regards to CSS, which we'll cover later, but to see what I mean:

``` html
<p>Why isn't this <span>interesting?</span></p>
```

####`<div>`

div tags are probably the most commonly seen tags. It's a generic container for content. It's often used to group things together for styling purposes.

####`<ul>`, `<ol>`, & `<li>`

Unordered and Ordered Lists. Unordered come with bullets, ordered come with numbers. The lists within them must be made of `<li>`, or list item, tags. For example:

``` html
<ul>
	<li>Stuff 1</li>
    <li>Stuff 2</li>
</ul>
```
### Semantic Tags

Certain tags tell you exactly what they are in their naming. These are phenomenal to use when other developers will be using your code, as anyone seeing these tags will be well aware what you're trying to make with them.

Again, an important rule in programming is clarity! These assist in that. Examples are `<footer>`, `<header>`, `<code>`, `<em>`, `<nav>`, `<main>`, and `<section>`.

## Tags with Distinct Attributes
Some tags are very specific in nature.  They contain attributes, or additional metadata, in order to work. Let's look at some and see how to use them in our HTML documents.

###`<a>`

Anchor tag. I'm sure you've used these before - they link us to other pages. Within them are the special attribute `href` (hypertext reference). You set the `href` to a url using an `=`, then surround a word in the `<a>`. For example:

``` html
<a href="http://www.google.com">Google</a>
```

###`<img>`

The image tag is a *self-closing tag*. That means you do not need a closing tag! It uses `src`, or source, to find the required image. The url can be local (on your computer) or online. `<img>` also uses `alt` which can be filled by text if the image is not found. For instance:

``` html
<img src="http://images.ftw.usatoday.com/wp-content/uploads/2013/05/freehugs.jpg" alt="Tim wants a hug">
```

If the image is not found, the text "Tim wants a hug" will appear in the site instead.

###`<form>` & `<input>`

We'll be using these a ton in the future when we have data we want to persist, but for now, just understand that they have their own attributes, such as `for`, `value`, and `type`.

Additionally, `<input>` is also a self-closing tag.

###`id`

`id` is an attribute that can be used in a number of ways (with any html tag with content, aka non-`<head>` elements). While it's often used as a very specific selector for CSS, it can also be used as a place to point to for site navigation and as a great locator for JavaScript.



#CSS3

## Intro to Cascading Style Sheets

#### What is CSS?

CSS is a web technology used to format HTML documents.

CSS enables us to separate the structure & content (HTML) of a document from its presentation.  This concept of *separation of concerns* is widespread throughout software development because it helps make programs more maintainable and provides better code reuse.

#### Basic CSS Syntax

![](http://learnwebcode.com/wp-content/uploads/2010/02/anatomy-of-a-css-rule.gif)
   
- **Selectors**:
	- Used to target the element(s) to be styled.
	- Can range from simple to complex.
	- Multiple selectors can be separated with commas
- **Properties**:
	- There are over two hundred CSS properties that can be used to style the color, size, text, position, border, animation, etc. of elements.
- **Value**:
	- The value to apply to a property is, of course, specific to that property. For example, the CSS property, _font-family_, accepts values of names of fonts such as _Georgia_, _Arial_, etc.

## CSS Properties
	
### Shorthand Properties

Shorthand properties are CSS properties that let you set the values of several CSS properties simultaneously.

##### font
  
```css
p {
   font-style: italic;
   font-weight: bold;
   font-size: 12px;
   line-height: 14px;
   font-family: Helvetica;
}
```

The five lines of CSS declarations above can be merged into a single declaration as follows:

```css
p {
   font: italic bold 12px/14px Helvetica;
}
```

##### margin
  
```css
div {
   margin-top: 10px;
   margin-right: 5px;
   margin-bottom: 15px;
   margin-left: 25px;
}
```

The four lines of CSS declarations above can be merged into a single declaration as follows:
  
```css
div {
   margin: 10px 5px 15px 25px;
}
```
   
The above `margin` example specifies margins for all four sides (top, right, bottom & left - in that order).

A good word to help remember the order of these values is **TR**ou**BL**e.
   
[This documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) explains all about shorthand properties.

## Adding Styles to a Web Page
### Setup

Before we can add styles to a web page, we're going to need one to style!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>WDI Rocks!</h1>
</body>
</html>
```

### Three Ways to Add Styles

There are three ways to add styling to a web page:

  - Inline Styles
  - Internal Stylesheets
  - External Stylesheets

#### Inline Styles

An **inline style** can be used to apply style to a single element using the `style` attribute.

The use of inline styles breaks our separation of concerns by mixing content with presentation, therefore this technique should be avoided whenever possible.

>Note: Several JS libraries and frameworks such as _AngularJS_ add styles dynamically using inline styling to perform their magic behind the scenes. However, as application developers, our magic should be follow the best practice of _separation of concerns_.

To demonstrate inline styling, let's use it to change the color of the  background and font:

```html
<body style="background-color: #eedd8e; color: darkblue">
``` 

Above we have used both a "[named color](http://www.w3schools.com/cssref/css_colornames.asp)" and a RGB hex value. There's a link in the References section if you want to learn more about colors in CSS.

Save and refresh - bam!

#### Internal Stylesheet

An **internal stylesheet** can be created by using a `<style>` element nested within the document's `<head>` element:

```html
<head>
  <meta charset="UTF-8">
  <title>CSS Basics</title>
  <style>
    h1 {
      text-align: center;
    }
  </style>
</head>
```

Now the text within our `<h1>` will be centered!

Although an improvement over using inline styling, inline stylesheets are also not the preferred method to add styles to your web page. That leads us to...

#### External Stylesheets

Styling a page using **external stylesheets is considered a best practice** because it provides the best separation of concerns and thus provides better reusability and maintainability.

External stylesheets are separate files with a `.css` extension and are "linked" to the document using the `<link>` element.

First, let's create our stylesheet inside of a new `css` folder:

```
? mkdir css
? touch css/style.css
```

Now we can link in the `style.css` external stylesheet like this:

```html
<head>
  <meta charset="UTF-8">
  <title>CSS Basics</title>
  <style>
    h1 {
      text-align: center;
    }
  </style>
  <link rel="stylesheet" href="css/style.css">
</head>
```

>Note that the *href* path in this case is relative to **index.html**.  
     
Let's add a css rule inside our new `style.css` file to test it out:

```css
body {
  font-family: "Lucida Grande";
}
```

### Load Order Matters

Often, there will be multiple CSS stylesheets that you want to include in your web page. For example, you will often want to load a CSS file from a third-party CSS framework and include your own custom CSS file as well.

When multiple stylesheets exist, the load order matters if they define the same CSS rule.

To demonstrate, let's update `style.css` as follows:

```css
body {
  font-family: "Lucida Grande";
  background-color: red;
}

h1 {
  text-align: right;
}
```
Save, refresh and discuss the results...<br><br>

**? - When identical CSS rules conflict, who wins?**

>Normally inline styling has the highest priority and overrides identical CSS rules contained within stylesheets.

**? - What are the three methods to add styles to a HTML document?<br>
? - Which method is considered a best practice and why?** 

## CSS Selectors

As shown earlier, the **CSS Selector** in a CSS rule, selects, or targets, an element, or elements, to be styled by the CSS _property:value_ declarations.

### Setup

To practice with CSS selectors, copy & paste this additional HTML inside of the `<body>` below our existing `<h1>`:

```html
  <p>This is a paragraph element</p>

  <div>This is a DIV</div>
  <div class="crazy-div">This is another DIV</div>
  <div class="crazy-div another-class">
  	<p>This is the third DIV</p>
  </div>

  <p id="comments-title">Comments</p>
  <ul>
    <li>Comment One</li>
    <li class="another-class">Comment Two</li>
    <li>Comment Three</li>
  </ul>
```

Next, let's rid ourselves of that inline stylesheet and inline style on the `<body>`.

Lastly, let's update `style.css` to start with the following:

```css
body {
  font-family: "Lucida Grande";
}

h1 {
  text-align: center;
}
```

### B A S I C S E L E C T O R S

#### *element* Selector

This is how we could select all `<h1>` and `<h2>` tags:

```css
h1, h2 { ... }
```

>PRACTICE:<br>- Set the margin on the `<body>` element to 15 pixels on all four sides<br>- Set the text color of all `<div>` elements to blue.

#### *ID* Selector

We select an element that matches the value of an `id` attribute by prefixing it with `#`:

```css
#id-name { ... }
```

>Note: **id**'s on elements should always be unique.

>PRACTICE:<br>- Set the size of the font to 28px on the `<p>` element with an `id="comments-title"`

#### *class* Selector

Selects elements that match one of the values of the *class* attribute (yes, the *class* attribute accepts multiple space separated values)

```css
.classname { ... }
span.classname { ... }  /* This will selected all <span class="classname"> tags */
```

>PRACTICE:<br>- Set the border of the `<li>` with a class of `another-class` to be solid, 2px in width and red in color.

#### *attribute* Selector

Selects elements based upon its attributes.

This is not very common, but if you come across square brackets in a selector, you'll know what they are for :)

```css
[attr] { ... }  /* Matches elements that have an attribute named attr */
a[href="#about"] { ... }  /* This will selected anchor tags with an href set to "#about" */
```

### C O M B I N A T O R S

Combinators provide a powerful way to select an element based upon its relationship to another element.

####Descendant Selector
**which is simply a space between two specified elements**

```css
/* This will match <span> tags nested anywhere within a <h3> tag that has a class of "sub-title"*/
h3.sub-title span { ... }
```

>PRACTICE:<br>- Set the background color of the `<p>` tag with the text of "This is the third DIV" to yellow.

####Child Selector** (>)

	```css
	div > p {...}
	```

	Selects all `<p>` tags that are **direct** children of a `<div>`.
	
####Adjacent Sibling Selector** (+)

	```css
	div + p {...}
	```

   Would select `<p>` tags only if they were preceded immediately by a `<div>`.

####General Sibling Selector (~)

	```css
	div.my-class ~ p {...}
	```

	Would select all `<p>` elements that are a sibling of a `<div>` with a class of "my-class".

### S P E C I F I C I T Y

*Specificity* is the means by which a browser decides which CSS rule gets applied when there is a conflict.  For example:

```css
.my-class {
    color: blue;
}

div {
    color: red;
}

<div class="my-class">What color am I?</div>
```

A conflict exists because the `<div>` matches both CSS selector rules.  The selector with the **highest** *Specificity* wins based upon this list of increasing specificity:

- Universal (*) selector
- Type (element) selectors
- Class selectors
- Attributes selectors
- Pseudo-classes
- ID selectors
- Inline styles

**? - What color will the `<div>` in the above example be?**

There is an exception to the concept of *specificity* known as the **!important** declaration.  Use of *!important* is not recommended because it can make debugging CSS more difficult than it already is.

### P S E U D O C L A S S E S

Pseudo-classes (along with pseudo-elements) let you style elements not just based upon their class, type, id or position in the document, but also in relation to other factors like whether an `<input type="checkbox">` is checked or not.

####Some common pseudo-classes are `:active`, `:disabled`, `:empty`, `:first-child`, `:nth-child`, `:nth-of-type`, `:focus`, `:hover`, and many more!

Try chaining pseudo-classes!  `li:nth-child(3):hover`

>PRACTICE:<br>- Use the `:hover` pseudo-class to change the cursor to the little hand-pointer when it's over any of the `<li>` elements.<br>- Use the `::first-letter` pseudo-element to set the size of the "C" in "Comments" to be 60px.

Here's a link to learn more about [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes) and [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

### CSS Selectors - Key Takeaway

CSS selectors provide enormous capability and flexibility to target any element(s) for styling!  You will spend a good amount of time as a front-end developer learning how to wield their power.

## Resources

[CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

[CSS Colors](http://www.w3schools.com/cssref/css_colors.asp)


