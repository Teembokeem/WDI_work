# ![](http://i.imgur.com/4yNYDLI.png) Mongoose

![Be careful… I… am death…](assets/rikkitikkitavi.jpg)

### A JavaScript ODM with Explicit MongoDB schema

|   | Lesson Objectives |
|:-:|:------------------|
| Mongoose ODM      | Explain what Mongoose is (ODM, schema) and why one would use it.
| Mongoose ODM      | Use Mongoose models to CRUD JavaScript "documents" in MongoDB.
| Mongoose ODM      | Handle the output of Mongoose queries using callbacks and promises.
| Mongoose ODM      | Use Mongoose schema to validate documents.
| Mongoose ODM      | Use Mongoose schema to add application logic to models/documents.
| Document Modeling | Compare & contrast MongoDB's structure to that implemented by Mongoose.

<!-- | Document Modeling | Use Mongoose schema to implement complex/nested structures. -->

## Context

> ##### What is Mongoose? How does it integrate with MongoDB?

Simply put, Mongoose is a JavaScript library that makes it easier to
write programs that use MongoDB.

Mongoose can be said to "wrap" MongoDB, in that **when we use it, we
only talk to Mongoose** (it's Mongoose that deals with MongoDB).

> ##### Why use Mongoose?

Mongoose is to MongoDB as ActiveRecord is to PostgreSQL and other
relational database management systems: it turns the data in the
database into objects we work with in our programs (and vice versa).

But Mongoose does *even more than ActiveRecord*! Where relational
databases (SQL) have tools for structuring data, MongoDB does not.
Mongoose fills that purpose.

> ##### What does Mongoose provide?

Mongoose helps us to CRUD our data and turn it in to JavaScript objects,
by giving us ***model constructors*** that act like ActiveRecord model
classes, which return ***objects representing documents***.

Mongoose also gives us ***schema*** that allow us to define structures
for our documents, and therefore validate input. These schema include
a host of other functions too! From their website:

> [Mongoose provides a straight-forward, schema-based solution to model
> your application data. It includes built-in type casting, validation,
> query building, business logic hooks and more, out of the box.][mg-home]

#### Models (ODM) vs Schema

The two big pieces of Mongoose, **models** and **schema**, work
together, [but are not the same][so-sch-mod].

Remember when we used ActiveRecord, how we would have to define a
structure for our models first, as migrations? **We can think of
Mongoose schema as being like ActiveRecord migrations**: they define the
structure of our data. We make them first!

Mongoose's models allow us to simply interact with (CRUD) a MongoDB. In
this way, Mongoose models are similar to ActiveRecord's models. However,
where ActiveRecord worked with relational (or *SQL*) data, and was thus
called an Object-Relational Mapper (ORM), Mongoose works with data
stored as documents, and is therefore called an
***Object-Document Mapper (ODM)***.

Here is a side-by-side comparison:

|       Technology           |       Entities        |      Instances      | Attributes & Types |
|---------------------------:|:---------------------:|:-------------------:|:------------------:|
|           *PostgreSQL/SQL* | *tables*              | *rows*              | *columns* (schema) |
| **ActiveRecord (SQL ORM)** | models (classes)      | models (objects)    | migrations         |
|                  *MongoDB* | *collections*         | *documents*         | *n/a*              |
| **Mongoose (MongoDB ODM)** | models (constructors) | documents (objects) | schema (paths)     |

#### Schema in a "Schemaless" World

**One of the things you may hear about NoSQL DBs in general, and MongoDB
specifically, is that it is *schemaless*, and that this is a good thing!
[Mongo itself supports this notion!][mdb-schemaless]**

What they mean is not that the database has no structure, but that you
don't *have to create a structure first, and stick with it*.

**But MongoDB does have a basic structure**: it has separate data called
*documents* that are arranged in to *collections*, or types, and these
collections have *indices* that verify the uniqueness of each document.

Furthermore, whenever you write code that accesses data in a document,
you are assuming that [the document has some structure, or an implicit
(and unenforced) schema][fowler-schemaless].

**The reality is that most people still need and want explicit, enforced
schema for their data anyway**. This includes us! That's why we will use
Mongoose to define our schema, like we used ActiveRecord migrations.

There is a confusing difference with the analogy here: in ActiveRecord
migrations we only defined attribute *names* and *types*; maybe a
*default value* as well… Things like validations, application logic,
etc. were all defined on models.

**In Mongoose, however, validations and logic are all defined in the
schema**, and then packaged as a model. Or, according to the Mongoose
docs:

> [*Models are fancy constructors compiled from our Schema
> definitions.*][mg-models]

## Using Mongoose and its API

The guide is here, with quickstarts here and here.

http://mongoosejs.com/docs/guide.html
http://mongoosejs.com/docs/index.html
https://github.com/Automattic/mongoose

**Mongoose Vocab:**

- Connections
- schema
  - Paths
- Models
- Documents
- Queries
- Embedding
- Referencing
- Callbacks and Promises

**Intro to Mongoose API:**

The API documentation is here.

- Connection
- Schema
  - types
  - validations
  - statics (class methods) & methods (instance/document methods)
  - setters/getters
  - paths and virtuals
- Model
  - documents (ie, instances): #save, #remove, #populate, #execPopulate, etc.
  - queries: .count, .find, .findById, .findByIdAndUpdate, .exec, etc.

**[Mongoose Cheatsheet](mongoose_cheatsheet.md)**

### Introductory Walkthrough

Mongoose Models

Mongoose schema

Validation

Adding Application Logic with Statics and Methods

<!-- Managing the Document Structure with Setters, Getters and Middleware -->

Embedding, or Nesting Documents

Referencing Documents and Populating Queries

### Document Modeling

https://www.youtube.com/watch?v=qI_g07C_Q5I

<!-- LINKS -->

[mg-home]:   http://mongoosejs.com/index.html
[mg-models]: http://mongoosejs.com/docs/models.html

[mdb-schemaless]: http://blog.mongodb.org/post/119945109/why-schemaless
[fowler-schemaless]: http://martinfowler.com/articles/schemaless/

[so-sch-mod]: http://stackoverflow.com/questions/22950282/mongoose-schema-vs-model?lq=1
