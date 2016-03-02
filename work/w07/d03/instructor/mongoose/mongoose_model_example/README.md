# Mongoose Models (ODM)

Mongoose's models allow us to simply interact with (CRUD) a MongoDB. In
this way, Mongoose models are similar to the Rails library 
**ActiveRecord**.

> Remember, ActiveRecord let us work with data in a relational (or *SQL*) 
> database as if they were Ruby objects, and was thus called an 
> Object-Relational Mapper (ORM). **Mongoose** is similar: it **allows us
> to work with data in a document store as if they were JS objects, and
> is therefore called an Object-Document Mapper (ODM)**.

|     Technology         |      Entities        |      Instances     | Attributes |
|-----------------------:|:--------------------:|:------------------:|:----------:|
|       *PostgreSQL/SQL* | *tables*             | *rows*             | *columns*  |
| ActiveRecord (SQL ORM) | model classes        | model objects      | attributes |
|              *MongoDB* | *collections*        | *documents*        | *n/a*      |
| Mongoose (MongoDB ODM) | models (constructor) | documents (object) | paths      |

To see this at work, we need to create a connection to MongoDB.
