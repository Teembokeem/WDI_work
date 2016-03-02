![](http://core0.staticworld.net/images/idge/imported/article/nww/2011/06/mongodb-100275964-orig.png)
# Intro to MongoDB

| Learning Objectives |
| :--- |
| Describe how MongoDB is Different from a RDBMS |
| Save and Retrieve MongoDB Documents |
| Model Data using Embedding & Referencing |

## Roadmap
- What is MongoDB
- MongoDB vs. Relational SQL Databases
- Installing and Starting MongoDB
- Creating a Database and Inserting Documents
- Data Modeling in MongoDB
- Querying Data
- Updating Data
- Removing Data

## What is MongoDB

### Overview

<img src="https://s-media-cache-ak0.pinimg.com/736x/d3/2e/1b/d32e1b0ae6736a2fd7ec0e391c0013b2.jpg" style="width:900px">

#### What is MongoDB?

MongoDB is the [dominate player](http://db-engines.com/en/ranking) in the world of data stores known as _NoSQL databases_, also called _document databases_. NoSQL databases do not model or store data in the tabular relations we became familiar with in unit two.

MongoDB puts the "M" in the MEAN Stack, a technology stack that emphasizes the use of JavaScript in both the front-end and back-end.

Instead of _Structured Query Language_, MongoDB uses JavaScript as it's native language for database operations.

You're going to see that working with **data** in MongoDB is like working with JavaScript objects - more on this in a bit.

Although MongoDB is ideal when working in the world of full-stack JavaScript, it can be used with a multitude of programming languages and frameworks, including Ruby on Rails. When used with Rails, there is no need for database migrations! If this interests you, take a look at the _mongoid_ ORM gem.

#### Hu_mongo_us Use Case

NoSQL databases are heavily used in big data and social media applications.  

They can store vast amounts of data more easily than a relational DB can.

They are also very useful in applications where the data is "unstructured". Imagine trying to model data using a SQL database for an online application for drawing wireframes. What are the tables?  What are the columns?  Because the data varies in structure, this would be a great application for a NoSQL database like MongoDB.  

However, as great as NoSQL databases are for big and unstructured data, they are not ideal for applications that require a high level of transactional support. For example:

> Consider what happens when a stock is bought/sold at a stock exchange. The event would be impact several tables in the DB that are used to track the transaction, customer balances, the equity itself, etc.

**What could happen if all the information related to the purchase/sale of a stock was not updated at the _exact_ same time?**

Ensuring this point-in-time consistency across multiple data tables is a cornerstone of a RDBMS. They are designed to wrap multiple data updates in a single _transaction_. Using a transaction, if a single update fails, all the updates fail. The use of transactions therefore prevent data from becoming out of sync, or _inconsistent_.

Whereas transactional support is built-in to relational databases, with MongoDB, transactional consistency needs to be implemented by the application itself, a non-trivial task indeed.

### Data Format

- A MongoDB database consists of _documents_.
- A _document_ in MongoDB is composed of _field_ and _value_ pairs.

Lets take a look of what a MongoDB _document_ may look like:

```js
{
    _id: ObjectId("5099803df3f4948bd2f98391"),
    name: { first: "Alan", last: "Turing" },
    birth: new Date('Jun 23, 1912'),
    death: new Date('Jun 07, 1954'),
    contribs: [ "Turing machine", "Turing test", "Turingery" ],
    views: 1250000
}
```

__Does this data structure look familiar to you?__

<br><br><br>

A MongoDB _document_ is very much like JSON, except it is stored in the database in a format known as _BSON_ (think - _Binary JSON_).

_BSON_ basically extends _JSON_ with additional data types, such as __ObjectID__ and __Date__ shown above.

### The Document *_id*

The *_id* is a special field represents the document's _primary key_ and will always be listed as the first field. It must be unique.

We can explicitly set the *_id* like this:

```js
{
	_id: 2,
	name: "Suzy"
}
```
or this...

```js
{
	_id: "ABC",
	name: "Suzy"
}
```

However, it's much more common to allow MongoDB to create it implicitly for us using its _ObjectID_ data type as shown in the Alan Turing document above.

## MongoDB vs. Relational SQL Databases

### Terminology

<img src="http://4.bp.blogspot.com/-edz2_QrFvCE/UnzBhKZE3FI/AAAAAAAAAEs/bTEsqnZFTXw/s1600/SQL-MongoDB+Correspondence.PNG" style="width:900px">

### Key Differences of MongoDB

#### Schema-less
The documents in a MongoDB collection can have completely different types and number of fields from each other. There are no definitions of columns, in fact, a field with the same name can contain different types of data - not that I would recommend doing this however.

#### No Table Joins
In a SQL DB, we break up related data into separate tables. These separate tables are later "joined" as necessary. 

In MongoDB, there are no joins. When we have related data, for example, a _post_ has many _comments_, we often _embed_ that related data in a single document, you'll see an example of this later.  We'll also see another way of modeling associations between data using _referencing_.

The supporters of MongoDB highlight the lack of table joins as a performance advantage since joins are expensive in terms of computer processing.

**Any questions before we move on?**

## Installing and Starting MongoDB

### Installation

You may already have MongoDB installed on your system, lets check in terminal `? monggod` (note the lack of a "b" at the end").

If you receive an error, lets use _Homebrew_ to install MongoDB:

1. Update Homebrew's database (this might take a bit of time)<br>`? brew update`
2. Then install MongoDB<br>`? brew install mongodb`

MongoDB by default will look for data in a folder named `/data/db`. We would have had to create this folder, but Homebrew did it for us (hopefully).

### Updating MongoDB

If you do have MongoDB installed, it can be upgraded to its latest version:

1. Update Homebrew's database (this might take a bit of time)<br>`? brew update`
2. Then upgrade MongoDB<br>`? brew upgrade mongodb`

### Start Your Engine

`mongod` is the name of the actual process for the database engine. The installation of MongoDB does not set the mongoDB engine to start automatically when our systems boot up.

A common source of errors when starting to work with MongoDB is forgetting to start the database engine. So, be sure to check that you have the engine running in a terminal window if you get an error.

To start the database engine, type `mongod` in terminal.

MongoDB's default port is 27017.

### Stopping the MongoDB Engine

Press `control-c` to stop the engine.

It's important to stop Mongo's database engine **before** closing the terminal window.  Otherwise, you will need to manually shut down the process with this command:

```
$ pgrep mongo
31132
$ kill 31132
```

## Creating a Database and Inserting Documents

### Mongo Client App

MongoDB installs with a client app, a JavaScript-based shell, that allows us to interact with MongoDB directly.

Make sure that the MongoDB engine (`mongod`) is running then...

Start the app in terminal by typing `mongo`.

The app will load and change the prompt will change to `>`.

List the shell's commands available: `> help`.

Show the list of databases: `> show dbs`.

Show the name of the currently active database: `> db`.

Switch to a different database: `> use [name of database to switch to]`.

Let's switch to the `local` database: `> use local`.

Show the collections of the current database `> show collections`.

### Creating a new Database

To create a new database in the Mongo Shell, we simply have to _use_ the database.  Lets create a database named _myDB_:

```
> use myDB
```

### Inserting Data into a Collection

This is how we can create and insert a document into a collection named _people_:

```
> db.people.insert({
... name: "Fred",	// Don't type the dots, they are from the 
... age: 21			// shell, indicating multi-line mode
})
```
Using a collection for the first time creates it!

__YOU DO: Let's add another person to the _people_ collection. But this time, add an additional field called _birthDate_ and assign it a date value with something like this: *birthDate: new Date('3/21/1981')*__

Remember, documents in Mongo are schema-less. Each document within a collection can contain **completely** different data.  This is in direct contrast to SQL databases which have schemas and where each row in a table has to contain the same type of data.

To list all documents in a collection, we use the _find_ method on the collection without any arguments:

```
> db.people.find({})
```

The `{}` is called the _query object_, and when empty like above, it matches all documents within the collection.  It's also optional if you want to return all the documents:

```
> db.people.find()
```

#### Plant the Seed and Watch your Data Grow

To practice querying our database, here are few more documents to put in your _people_ collection. We can simply provide this __array__ to the _insert_ method and it will create a document for each object in the array.

```js
db.people.insert(
	[
		{
			"name": "Emma",
			"age": 20
		},
		{
			"name": "Ray",
			"age": 45
		},
		{
			"name": "Celeste",
			"age": 33
		},
		{
			"name": "Stacy",
			"age": 53
		},
		{
			"name": "Katie",
			"age": 12
		},
		{
			"name": "Adrian",
			"age": 47
		}
	]
);
```
Be sure to include the closing paren of the _insert_ method.

**This is another fine example of method ____________**

#### Creating Data Programmatically (using JavaScript code)

Let's see how we might create data programmatically.

Here's what we're going to do:
1. Loop through our _people_ collection.
2. Create a document in a collection named _accounts_ for each person and "link" that document to the person to which it is for.

Enter the following JavaScript in the shell:

```
> var cursor = db.people.find();
> while (cursor.hasNext()) {
... var person = cursor.next();
... var acctNo = Math.floor(Math.random() * 9999999999);
... var bal = Math.floor(Math.random() * 2000);
... db.bankAccounts.insert({
... owner: person._id,
... accountNo: acctNo,
... balance: bal
... });
... }
```

> Note: Using the `find()` method in the Mongo Shell returns a "cursor"

Obviously, we would prefer to be writing code like the JavaScript above in an actual program instead of the shell. Also, later today you're going to see how using the Mongoose ORM makes working with MongoDB more "fun" :) This lesson is only focused on showing you MongoDB fundamentals...

__Take a look by listing the _bankAccount_ collection__

__Questions?__

## Data Modeling in MongoDB

There are two ways to modeling related data in MongoDB:

- via __embedding__ 
- via __referencing__ (linking)

Both approaches can be used simultaneously in the same document.

### Embedded Documents

In MongoDB, by design, it is common to __embed__ related data in the parent document.

Modeling data with the __embedded__ approach is different than what we've seen in a relational DB where we spread our data across multiple tables. However, this is the way MongoDB is designed to work and is the reason MongoDB can read and return large amounts of data far more quickly than a SQL DB that requires join operations.

To demonstrate __embedding__, we will add another person to our _people_ collection, but this time we want to include contact info. A person may have several ways to contact them, so we will be modeling a typical one-to-many relationship.

Let's walk through this command by entering it together:

```
> db.people.insert({
... name: "Manny",
... age: 33,
... contacts: [
... {
... type: "email",
... contact: "manny@domain.com"
... },
... {
... type: "mobile",
... contact: "(555) 555-5555"
... }
... ]
... })
```

__What would be a downside of embedding data?__

<br><br><br>

If the embedded data's growth is _unbound_, MongoDB's maximum document size of 16 megabytes could be exceeded.  However, that's a pretty big document, assuming you're not trying to store binary file data in there.

The above approach of embedding "contact" data provides a great deal of flexibility in what types and how many contacts a person may have.

Another example of a data model where embedding works well is the typical a _post_ has many _comments_ scenario. Embedding comments within a _post_ document works great because those comments don't make sense without the post that they belong to.


### Referencing Documents (linking)

We can model data relationships using a __references__ approach where related data is stored in separate documents. These documents, due to the fact that they hold different types of data, are likely be stored in separate collections for organizational purposes (MongoDB doesn't care, but we might).

Earlier, we created a _bankAccounts_ collection to demonstrate the __references__ approach.

Consider also that documents can reference more than a single document with the use of arrays of ObjectIds.  For example, we could have an _accounts_ field that is an array on the person documents.

Again, because there are no "joins" in MongoDB, retrieving a person's bank account information would require a separate query on the _bankAccounts_ collection.

These decisions depend upon the design and functionality of the application. You can put the linking field on the _bankAccount_ documents, the _person_ documents, or both! It's your call!

**What is the downside to including the references on both sides of the relationship?**

### Data Modeling Best Practices

MongoDB was designed from the ground up with application development in mind. More specifically, what can and can't be done in regards to data is enforced in your application, not the database itself (like in a SQL database).

Here are a few things to keep in mind:

- For performance and simplicity reasons, lean toward _embedding_ over _referencing_.
- Prefer the _reference_ approach when the amount of child data is unbound and there is a danger of exceeding the 16MB size limit for a document.
- Prefer the _reference_ approach when multiple parent documents access the same child document and that child's data changes frequently. This avoids having to update redundant data in multiple locations.
- Obtaining _referenced_ documents requires multiple queries by your application instead of a single query when using _embedding_ - this is why _embedding_ is much more performant.
- In the _references_ approach, depending upon your application's needs, you may choose to maintain links to the related document's *_id* in either document, or both.

Also, if your data model calls for using _referenced_ data, _Mongoose_ will make it easier to implement.

For more details regarding data modeling in MongoDB, start with [this section of mongoDB's documentation ](http://docs.mongodb.org/manual/core/data-modeling-introduction/) or this [hour long YouTube video](https://www.youtube.com/watch?v=PIWVFUtBV1Q)

## Querying Data
<br>
>PSA: We are going to take a look at MongoDB's native query methods.  However, as fun as it is, in our applications, we will be using a very popular ORM, _Mongoose_.  Many of Mongoose's methods are similar to Mongo's, so it's still worth paying attention :)
<br>

We've seen how to retrieve all of the documents in a collection using the `find()` method.

We can also use the `find()` method to query the collection by passing in an argument containing our query criteria as an JS object:

```
> db.people.find( {name: "Miguel"} )
```

Here's how we can use MongoDB's `$gt` query operator to return all _people_ documents with an age greater than 20:

```
> db.people.find( {age: { $gt: 20 } } )
```

MongoDB comes with a slew of built-in [query operators](http://docs.mongodb.org/manual/reference/operator/query/#query-selectors) we can use to write complex queries.

__Can you write a query to retrieve people that are less than or equal to age 20?__

In addition to selecting which data is returned, we can modify how that data is returned by limiting the number of documents returned, sorting the documents, and by projecting which fields are returned.

This sorts our age query and sorts by _name_:

```
> db.people.find( {age: { $gt: 20 } } ).sort( {name: 1} )
```
The "1" indicates ascending order. 

[This documentation](http://docs.mongodb.org/manual/core/read-operations-introduction/) provides more detail about reading data.

## Updating Data

In MongoDB, we use the `update()` method on a collection.

We will need to specify the _update criteria_ (like we did with `find()`), and use the `$set` action to set the new value.

```
> db.people.update( { name: "Miguel" }, { $set: { age: 99 } })
```

By default `update()` will only modify a single document. However, with the `multi` option, we can update all of the documents that match the query.

```
> db.people.update( { name: { $lt: "M" } }, { $inc: { age: 10 } }, { multi: true } )
```
We used the `$inc` update operator to increase the existing value.

Here is the [list of Update Operators](http://docs.mongodb.org/manual/reference/operator/update/) available.

__Challenge: add another contact to our person document named "Manny". Hint: you will need to use the link above to discover the Array Update Operator to use for this__

## Removing Data

We use the `remove()` method to data from collections.

If you want to completely remove a collection, including all of its indexes, use `[name of the collection].drop()`.

Call `remove({})` on the collection to remove **all** docs from a collection.

Otherwise, specify a criteria to remove all documents that match it:

```
>db.people.remove( { age: { $lt: 16 } } )
```
__Choose a person document by name and remove them from the collection.__

## Exercise

- Analyze and determine how you would model the following:
	- Gamers plays games
	- Gamers wish to log each time they play a particular game and save the score
	- Gamers like to become members of meetups that specialize in a particular game
	- The meetups have lots of information, like their schedule, speakers, membership, etc. (don't worry about creating all of these attributes).


## References

[mongoDB homepage](https://www.mongodb.org/)

[MongoLab](https://mongolab.com/)

[Robomongo - MongoDB Management Tool](http://robomongo.org/)

## Essential Questions

**SQL Tables are represented in MongoDB with ______?**

__While in MongoDB's shell, what command would we enter to retrieve all of the documents from a collection named _books_?__