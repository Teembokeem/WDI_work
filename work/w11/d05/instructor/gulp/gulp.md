##### [click to view presentation](https://presentations.generalassemb.ly/91e96a1b272f38e8d74f#/)

---

![](http://i.ytimg.com/vi/4cxsXXfJetM/maxresdefault.jpg)

---

## Learning Objectives
<br>

- Understand the Use Case for _Gulp_
- Install & Setup _Gulp_
- Create a _Gulp_ Task
- Use _Gulp_ to Create Production Ready Code

---
## Roadmap
<br>

- What is _Gulp_ and what is it used for?
- What else can _Gulp_ do?
- When to use _Gulp_
- _Gulp_ vs. _Grunt_
- Review Starter Project
- Installing _Gulp_
- Setting up _Gulp_
- Writing our first _Gulp_ Task - Concatenation
- The `default` task
- Watching for changes
- Minification

---
## What is _Gulp_<br>and<br>what is it used for?
---
### What is _Gulp_?

<img src="http://loige.co/content/images/2015/10/gulp-is-the-streaming-web-build-system.png" style="width:900px">

#### _Build System?_<br>What the heck is a build system?

---
#### What's a _Build System_?
<br>

- Let's see what build systems do...
	1. If it's handy, open your Project 2 app on Heroku<br>(I'll demo with [**Pacis**](http://pacific-taiga-52255.herokuapp.com/) because it has a lot css & some client-side JS)
	2. Open the "Sources" tab in Chrome's Dev Tools
	3. Use the File Browser on the left to find the `*.js` and `*.css` files

- **Keith, does this look like the CSS & JS you wrote?**<br>**What happened to it?**

---
#### What's a _Build System_? (cont.)
<br>

- Those stylesheets and script files were minified and concatenated by the Rails **build system** known as the<br>_Asset Pipeline_ and implemented by the _Sprockets_ gem.

- Rails automatically produces production ready code with its built-in build system - thanks Rails!

---
#### What's a _Build System_? (cont.)
<br>

- Now let's open your deployed Project 3 Node app and check the "Sources" tab again (I'll demo using the [**Propel**](https://ancient-oasis-48219.herokuapp.com/welcome) app).

- This time we'll find several separate (not concatenated),<br>non-minified scripts and stylesheets as written by Team Sublime.

- **So, what's different between these deployed<br>Rails & Node apps?...**

---
#### What's a _Build System_? (cont.)
<br>

- Rails has automatically built **our** code into **production code**.

- NodeJS has not.

- **So, which type of app, Rails or Node, is a more likely use case for a build system like _Gulp_?**

---
## What else can<br>_Gulp_ do?

---
#### What else can _Gulp_ do?
<br>

#### <small>First and foremost:</small><br>Increase developer productivity!
<br>
<br>
#### It automates mundane tasks that we otherwise would have to do manually...

---
#### This is why _Gulp_ is also known as a _Task Runner_,<br>not just a build system!
<br>

#### Let's see what type of tasks _Gulp_ can run!

---
#### What else can _Gulp_ do? (cont.)
<br>

- _Gulp_ uses **plugins** designed to complete certain tasks.

- There are numerous plugins available that can be installed using `npm`.

- Do a search for "gulpjs plugins" and take note of the name of a few plugins and what they do.

- I'll ask you to share your findings in 3 minutes.

---
### In summary,<br>what is the use case for _Gulp_?

---

<img src="http://media02.hongkiat.com/gulp-vs-grunt/gulp-vs-grunt.jpg" style="width:900px">

<br>

#### So, let's get this out of the way...

---

<img src="http://image.slidesharecdn.com/angularworkflowwithgulp-141129042647-conversion-gate01/95/angular-workflow-with-gulpjs-10-638.jpg?cb=1417411543" width="900px">

---
## Review the Starter Project

---
### Review the Starter Project
<br>

- Reviewing the project, we find:
	- It has a minimal `index.html` that loads:
		- _Bootstrap_ from a `libs/css` folder and two app specific CSS files from the `src/css` folder.
		- JQuery from a `libs/js` folder and two app specific script files from the `src/js` folder.
	- Directory structure:
		- **`libs`**: Contains third-party vendor library files.
		- **`src`**: This is where we put the code we write,<br>our app's pre-processed CSS & JS files.

---
### Review the Starter Project (cont.)
<br>

- For this lesson, we're going to use `http-server` to serve our assets.  BTW, `live-server` does not automatically serve from a `public` folder, so we're not going to use it.

- Install `http-server` if you have too, fire it up, and browse to `localhost:8080`.

- You should see the app running with the CSS and JS doing their jobs.

---
## Our Goal
<br>

- When all is said and done, we will want our production code, including `index.html` being served out of a `public` folder.

- "Production code", means that we will want:
	- A single, minified `all.js` file served from `public/js`.
	- A single, minified `all.css` file served from `public/css`.

---
## Let's Break our App

- Now that we know what our goal is, let's break our app by creating a `public` folder and moving our `index.html` into it:

	```sh
	? mkdir public
	
	? mv index.html public/
	```
	
- **We now must restart the server for it to recognize the `public` folder**.

- Notice that `index.html` will load just fine, but our CSS & JS will not.

- Don't worry, we're going to fix our app with production ready code!

---
### Modify "public/index.html" to Include our Production Code

- If our goal is to load a single JavaScript and a single CSS file from the `public` folder, we'll need to tweak our `index.html` to reflect this objective!

	```html
	<head>
		<meta charset="utf-8">
		<title>Gulp.js</title>
		<link rel="stylesheet" href="libs/css/bootstrap.min.css">
		<!-- <link rel="stylesheet" href="src/css/styles.css">
		<link rel="stylesheet" href="src/css/more-styles.css"> -->
		<link rel="stylesheet" href="css/all.css">
		
		<script src="libs/js/jquery-2.1.4.min.js"></script>
		<!-- <script src="src/js/hello-module.js"></script>
		<script src="src/js/app.js"></script> -->
		<script src="js/all.js"></script>
	</head>
	```

---
## Installing _Gulp_

---
### Installing _Gulp_
<br>

- We will be using _Gulp_ as a command line utility in Terminal like this:<br>

	```sh
	? gulp myTask 
	```
	So we need to install it globally with the `-g` option:<br>
	
	```sh
	? npm install -g gulp
	```

---
#### Installing _Gulp_ (cont.)
<br>

- _Gulp_ also requires that we install its module locally.

- **What file do we need to keep track of Node module dependencies?**

- **What's the best way to generate that file?** ...

---
#### Installing _Gulp_ (cont.)
<br>

- Create our `package.json` file:

	```sh
	? npm init -f
	```
	...the `-f` option forces defaults - no questions asked :)

- **What type of dependency will _Gulp_ be?**<br>Hint: Does our app use it when it's running?
	
---
#### Installing _Gulp_ (cont.)
<br>

- Install _Gulp_ locally:

	```sh
	? npm install --save-dev gulp
	```

- **Why is it important to have our app's dependencies (dev and non-dev) listed in the `package.json` file?**

---
### Setting up _Gulp_

---
#### Setting up _Gulp_
<br>

- _Gulp_ runs **tasks** that we code.

- We always define and code our tasks in a file named `gulpfile.js`.

- Let's create our `gulpfile.js`:

	```sh
	? touch gulpfile.js
	```

---
#### Setting up _Gulp_ (cont.)
<br>

- The first line inside `gulpfile.js` will always be used to load the `gulp` module:

	```js
	var gulp = require('gulp');	
	```

---
### Congrats, we've accomplished our objective of installing &<br> setting up _Gulp_!
<br>
#### Questions:

- **_Gulp_ looks for tasks in a file named _________?**

- **In this file, we _must_ require what Node module?**

- **Other than requiring our modules at the top, what are we going to put in this file?**

---
## Writing Our First _Gulp_ Task

---
### Writing Our First _Gulp_ Task
<br>

- Let's start with the absolute minimum so that we can check that we're wired-up and ready to go:

	```js
	var gulp = require('gulp');
	
	gulp.task('firstTask', function() {
		console.log('Hello');
	});
	```
	
- We're using _Gulp's_ `task()` method to define the task and passing it our task's name and an anonymous function to execute.

---
### Writing Our First _Gulp_ Task (cont.)
<br>


- Then, in our terminal type:

	```sh
	? gulp firstTask
	```

- You should see a result similar to:

	```sh
	[15:17:46] Starting 'firstTask'...
	Hello
	[15:17:46] Finished 'firstTask' after 99 μs
	```
	<br>**Everyone chill?**

---
### Writing Our First _Gulp_ Task (cont.)
<br>

- Our first real task will be used to concatenate our JavaScript files into a `all.js` file and write it to a `public/js` folder.

- **Of the plugins we discussed earlier, which one can we use to concatenate files?**

- **What are the two steps necessary before we can use this plugin, or any plugin for that matter?**

---
### Writing Our First _Gulp_ Task (cont.)
<br>

- Install `gulp-concat`:                                                              

	```sh
	? npm install --save-dev gulp-concat	 
	```
	<br>then in our `gulpfile.js`:			
	
	```js
	var gulp = require('gulp');
	var concat = require('gulp-concat');
	...
	```

---
### Writing Our First _Gulp_ Task (cont.)
<br>

- Now let's use our newly installed and required plugin to perform some concatenation!

- Let's rename our `firstTask` to `scripts` and write this code:

	```js
	var concat = require('gulp-concat');

	gulp.task('scripts', function() {
		return gulp.src('src/**/*.js')
			.pipe(concat('all.js'))
			.pipe(gulp.dest('public/js'));
	});
	```
	What's going on here...

---
### Writing Our First _Gulp_ Task (cont.)
<br>

- Here's what's going on:
	- The `return` statement is optional, but it lets Gulp know when a task, which runs asynchronously, has finished running.
	- `gulp.src('src/**/*.js')`: Grabs a file or files that match the given string pattern.<br><br>Of interest here is the `**` which matches all folders, all of their nested folders, or no folders at all. So, basically, this particular pattern string will grab **all** files with the extension of `js` in the `src` folder.

---
### Writing Our First _Gulp_ Task (cont.)
<br>

- Here's what's going on (continued):
	- `pipe()`: Gulp takes advantage of high-performance Node streams.<br>In Gulp we "pipe" our data stream from one plugin to another.
	- `concat('all.js')`: The `gulp-concat` plugin will take the file streams piped to it and merge them into a single stream named whatever name we pass in like we did here with `all.js`.
	- `gulp.dest('public/js')`: Gulp does not write anything to disk until told to and that's what we're doing here with the `dest()` method that's built into Gulp.

---
### Writing Our First _Gulp_ Task (cont.)
<br>

- So, this pattern, that we just used, is popular for many tasks in Gulp:
	1. Use Gulp's `src()` method to grab files and turn them into a stream.
	2. Use the `pipe()` method to provide the current stream to a plugin.
	3. The plugin takes the stream given to it, processes it and returns it to the pipe.
	4. Repeat steps 2 and 3 as necessary until the stream is finally outputted with Gulp's `dest()` method.

---
### Writing Our First _Gulp_ Task (cont.)

- **Before we run our task, who would like to predict what's going to happen?**

- Let's run it and check it out:

	```sh
	? gulp scripts
	```
	Cha-ching!
	
- Notice that `gulp.dest()` created the `public/js` folder automatically!

- But upon close inspection, there's a problem here!<br>**Who sees the problem?**

---
### Determining the Sequence of Concatenation
<br>

- So, our `all.js` file won't work because the `sayHello` function expression is not defined before being called - which will lead to seeing red in the console!

- However, the solution does not lie with `gulp-concat`, it simply concatenates in the order it receives the files...

---
### Determining the Sequence of Concatenation (cont.)

- It just so happens that Gulp's `src()` method can also take an array of files/patterns and the order they are listed in the array determines the order of the stream:

	```js
	gulp.src(['src/js/hello-module.js', 'src/**/*.js'])
	```

- Don't fret, Gulp is smart enough not to duplicate any file it's already included!

	```sh
	? gulp scripts
	```
	Nice swap-a-roo!

---
### Including Vendor Libraries
<br>

- Our quest to return a single JavaScript file to the browser will require that we include any vendor libraries necessary in our concatenated `all.js`.

- **Should we include vendor libraries _before_ or _after_ our app's scripts?**

---
### Including Vendor Libraries (cont.)
<br>

- Just add another wildcard pattern to <br>the `gulp.src()`:

	```js
	gulp.task('scripts', function() {
		return gulp.src([
			'libs/**/*.js',
			'src/js/hello-module.js',
			'src/**/*.js'
		])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js'));
	});
	```
	<br>Then...

---
### Including Vendor Libraries (cont.)
<br>

- Comment out the `<script>` tag for _jQuery_:

	```html
	<head>
		...
		<!-- <script src="libs/js/jquery-2.1.4.min.js"></script>
		<script src="src/js/hello-module.js"></script>
		<script src="src/js/app.js"></script> -->
		<script src="js/all.js"></script>
	</head>
	```


- Run `? gulp scripts` again, then refresh the browser!

- It's still ugly, but our JS is back in action :)

---
### Congrats on Creating Your First<br>_Gulp_ Task!<br>Another Objective Bites the Dust!
<br>

#### Questions:

- **What _Gulp_ method do we use to chain our plugins together and provide them with a data stream?**

- **What do we do if we need our source files streamed in a certain order?**

---
## Individual Practice
<br>

#### Concatenation<br><small>(10 minutes)</small>

---
### Individual Practice - Concatenation

- We've combined all our JavaScript into one file.

- Now it's your turn to use the `gulp-concat` plugin to do the same with our CSS!

- Name your new task `styles`.

- Be sure to include the Bootstrap library.<br>**Is the load order important for CSS like it is for JavaScript?**

- Don't forget to comment out the `<link>` for Bootstrap.

- 10 minutes - You got this!

---
#### Your app should be functioning now!
<br>

#### But we're not quite production ready,<br>we still need to minify.
<br>

#### However, there's a couple of other tricks we want to learn about first!

---
## The _default_ Task

---
### The _default_ Task
<br>

- If we simply type

	```sh
	? gulp
	```
	_Gulp_ will execute the task named `default`

---
### The _default_ Task (cont.)

- Let's define a `default` task that will run both the `scripts` and `styles` tasks:

	```js
	gulp.task('default', ['scripts', 'styles']);
	```

- So, we can define new tasks that run other tasks!

- Think of it as being able to use tasks like functions, allowing us to modularize and reuse them!

- The tasks listed in the array are run in parallel.

---
### Task Dependencies
<br>

- The tasks in our `default` task will run in parallel. This is great for maximum performance, but sometimes you may need to ensure a certain task or tasks are completed first.

- For example, what if we needed the `scripts` task for some reason to be completed before the `styles` task runs?

---
### Task Dependencies (cont.)
<br>

- One way we can achieve this is by specifying _dependencies_ like this:

	```js
	gulp.task('styles', ['scripts'], function() {
	  return gulp.src(['libs/**/*.css', 'src/**/*.css'])
	    .pipe(concat('styles.css'))
	    .pipe(gulp.dest('public/css'));
	});
	```
	
- By including an array of dependency tasks after the task name, Gulp will ensure that those tasks are completed first!

- Also, Gulp is smart enough to ensure that `scripts` only runs once! 

---
### Questions:
<br>

- **What is the name of the task that is executed if we just type "gulp"?** 

- **Why do we use `return` within our function when defining our tasks?**

---
## Watching For Changes

---
### Watching For Changes

- So, I think we can all agree that having to manually run our build tasks is tedious. It can lead to boo boos as well - what if we forgot to build before we deployed? Yikes!

- _Gulp's_ `watch` method to the rescue:

	```js
	gulp.watch(['src/**/*.js', 'src/**/*.css'], ['default']);
	``` 
	`watch` also has other signatures that can provide more control/power, however, to accomplish our goal, this minimal version will suffice.

---
### Watching For Changes (cont.)
<br>

- Now we just type `gulp`, and it will watch for changes to the files we specified and automatically execute the `default` task - check it out...

- Good 'ol `control-c` will end the _Gulp_ process. 
	
---
## Minification

---
### Minification
<br>

- So, the final hurdle to completing our objective of using _Gulp_ to build our production code is to **minifify** our JavaScript.

- **What plugin we can use?**

- **What do we have to do to use it?**

---
### Minification (cont.)                        
<br>

- This should look pretty familiar:         											    		                                            

	```sh
	? npm install --save-dev gulp-uglify			
	```
	and<br>                      					                   
	
	```js
	var gulp = require('gulp');
	var concat = require('gulp-concat');
	var uglify = require('gulp-uglify');
	```

---
### Minification (cont.)
<br>

- All we need to do to minify our JavaScript is pipe our stream<br>through the `gulp-uglify` plugin like so:

	```js
	gulp.task('scripts', function() {
		return gulp.src(['libs/**/*.js',
			'src/js/hello-module.js',
			'src/**/*.js'])
			.pipe(concat('all.js'))
			.pipe(uglify())
			.pipe(gulp.dest('public/js'));
	});
	```
	
- Type `gulp` and check your app's source files!

- There are also minifyer plugins available for CSS!

---
## Misson Accomplished!
<br>

#### We now have production code ready to deploy!
<br>
![](http://blogs.adobe.com/agile/files/2013/12/hands-counting.jpg)
<br>
#### Questions?

---
## Lab / After Hours Practice
<br>

- Those of you that have started MEAN Stack apps for project 4 have a great project to practice using _Gulp_.  However, those without an app started, should use the current project to:

	- Minify the CSS like we did with the JavaScript.
	- Research and use a plugin to compile a `sass` or `less` stylesheet.

---
## References
<br>

#### [Gulp.js Website](http://gulpjs.com/)





