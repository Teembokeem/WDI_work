# Mongoose Models (ODM)

As we saw [in the lesson](../README.md), Mongoose models are what we use
to CRUD data from JavaScript in to MongoDB. Our model constructors map 
to collections, and they return objects that map to documents.

As a reminder, here is the comparison table:

|       Technology           |       Entities        |      Instances      | Attributes & Types |
|---------------------------:|:---------------------:|:-------------------:|:------------------:|
|           *PostgreSQL/SQL* | *tables*              | *rows*              | *columns* (schema) |
| **ActiveRecord (SQL ORM)** | models (classes)      | models (objects)    | migrations         |
|                  *MongoDB* | *collections*         | *documents*         | *n/a*              |
| **Mongoose (MongoDB ODM)** | models (constructors) | documents (objects) | schema (paths)     |

Now, let's actually write some code to work with that data! **Work with
a partner.**

### Student DB Exercise

#### Starter Code

First, check out the code in [`starter`](starter). Read it, run it, and
formulate some questions about it.

> What makes sense? What doesn't?

Look especially at the structure of `app.js` and the use of callbacks.

> Why aren't we using a loop here?

Also, look at `spike.js`.

> What's the purpose of this file?

#### Steps

1. Create a student in `spike.js` (and check MongoDB for success).
2. Implement an add student function in the app.
3. Change the student "schema" to include a short id, and a sex.
   - Test this by adding more students.
4. Edit a student in `spike.js` (and check MongoDB for success).
5. Implement an edit student function in the app.
6. Remove a student in `spike.js` (and check MongoDB for success).
7. Remove all students in `spike.js` (and check MongoDB for success).
8. Implement removing students in the app.
