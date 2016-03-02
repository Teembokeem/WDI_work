# Mongoose (MongoDB Schemas & JavaScript ODM)

![Be careful… I… am death…](assets/rikkitikkitavi.jpg)

> **Ask Jim: should I cover modeling? Or is that with MongoDB?**
https://github.com/ga-students/WDI_DTLA_6/tree/master/work/w07/d03/instructor/intro_to_nosql_and_mongo

|   | Lesson Objectives |
|:-:|:------------------|
| Mongoose ODM      | Explain what Mongoose is (Schema, ODM) and why one would use it.
| Document Modeling | Compare & contrast MongoDB's structure to that implemented by Mongoose.
| Mongoose ODM      | Use Mongoose models to CRUD JavaScript "documents".
| Mongoose ODM      | Use Mongoose schemas to validate documents, add application logic, and implement complex/nested structures.
| Mongoose ODM      | Handle the output of Mongoose queries using callbacks and promises.

### Context

What is Mongoose? How does it integrate with MongoDB?
Why use Mongoose?
What does Mongoose provide?

http://mongoosejs.com/index.html

### Schema and Model

http://stackoverflow.com/questions/22950282/mongoose-schema-vs-model?lq=1

MongoDB provides collections and indexes.
Implicit schema, ie schemaless or non-enforced schema.

http://blog.mongodb.org/post/119945109/why-schemaless

The "model" part maps documents to JS objects.

|                 | ActiveRecord   | Mongoose |
|-----------------|----------------|----------|
| Schema          | SQL/Migrations | Schemas  |
| Model (ORM/ODM) | Models         | Models   |

The difference, and it's confusing, is that validations, business logic,
etc. in AR went on the model: migrations were simply TYPES, DEFAULTS, etc.
Here, these are all defined along with the schema, and then packaged as
a model. Or, according to the Mongoose docs:

> [*Models are fancy constructors compiled from our Schema definitions.*][models]

### API

The guide is here, with quickstarts here and here.

http://mongoosejs.com/docs/guide.html
http://mongoosejs.com/docs/index.html
https://github.com/Automattic/mongoose

**Mongoose Vocab:**

- Connections
- Schemas
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

Mongoose Schemas

Validation

Adding Application Logic with Statics and Methods

<!-- Managing the Document Structure with Setters, Getters and Middleware -->

Embedding, or Nesting Documents

Referencing Documents and Populating Queries

### Document Modeling

https://www.youtube.com/watch?v=qI_g07C_Q5I

<!-- LINKS -->

[models]: http://mongoosejs.com/docs/models.html
