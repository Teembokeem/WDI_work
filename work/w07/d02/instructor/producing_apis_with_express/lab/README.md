# Family Facepaint and Faygo API Woot Woot
![Facepaint Sales](http://www.rstreet.org/wp-content/uploads/2013/10/juggalos.jpg)
## Writing Our Own Express API Lab

Today we'll be building a Facepaint and Faygo Resource for our huge family of Juggalos.

Use Cheeseburgers in Cyberspace as a reference on how to set up your API. Also, make sure you run your code in Postman, so you know if it works!

**Remember to copy `starter_code/` out of `instructor/`!!**

### Step 1 - Building the Controller and Requiring it in Our Routes 

- Let's start with the facepaint resource. Go ahead and `touch controllers/facepaints.js`. Inside that file:

  - require `data/facepaint_data.js`
  - set module.exports to an empty object

- Then, go into `config/routes.js` and require the controller.

### Step 2 - Build Index and Show Path

- Within your new `facepaints.js` controller, add a function for `index` and `show`.

- Include the functions in your exports.

- Then make sure to add them to the routes using "GET" requests.

### Step 3 - Build Create Path

- Now create a `create` function in your `facepaints.js`. Remember to add an id to your new facepaints from your `facepaint_data.js`.

- Include the function in your exports.

- Create the route using "POST" on the router.

### Step 4 - Build Update Path

- Add an update function to `facepaints.js`. Use a PUT method in the router, as sometimes users may only change one aspect.

### Step 5 - Build Destroy Path

- Use the `Array.prototype.splice()` method to remove one of the facepaints.

- Use the DELETE method in your routes.

### Step 6 - Repeat for Faygo

- Repeat Steps 1-5 for a Faygo resource. 

- You'll also need to create `faygo_data.js` in `data/`. Don't forget to keep track of your ids!

### BONUS - Create a Nested Resource

  - Make a nested route for `endorsements` using __`data/facepaint_bonus_data.js`__ in place of the previous data.

  - **HINT**: Remember that `:id` is just a variable name we most commonly use - you can call it anything!

### DOUBLE BONUS - Use Query Strings to Filter Responses

- Build a query on the facepaints resource to limit the response to only facepaints that are safe for your skin!
	- **HINT**: You'll need to look up Query Strings!
	- **…ANOTHER HINT**: You'll also need `req.query`!
