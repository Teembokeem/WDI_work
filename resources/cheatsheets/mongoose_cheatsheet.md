# ![logo](http://i.imgur.com/4yNYDLI.png) Mongoose

> ***For more context, explanations, and examples, see
> [the lesson from class.][lesson]***

TOC

### MongoDB

1. starting
2. shutting down / rogue
3. console commands

### Using Mongoose

```javascript
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_app');

var userSchema = new mongoose.Schema({
    email:  String
});

var commentSchema = new mongoose.Schema({
    author: mongoose.Schema.ObjectId,
    text:   String,
    date:   Date
});

var postSchema = new mongoose.Schema({
    author:   mongoose.Schema.ObjectId,
    title:    String,
    body:     String,
    date:     Date,
    comments: [commentSchema]
});

var User = mongoose.model("User", userSchema),
    Post = mongoose.model("Post", postSchema);

create two users
create a post
add a comment

get all users
```

### Vocabulary

- **connection**:
- schema
  - path
- models
- documents
- statics
- methods
- queries
- embedding
- referencing
- callbacks and promises

### Core API

The API documentation is here.

- Connection
- Schema
  - types
  - validations
  - statics (class methods) & methods (instance/document methods)
  - setters/getters
  <!-- - paths and virtuals -->
- Model
  - documents (ie, instances): #save, #remove, #populate, #execPopulate, etc.
  - queries: .count, .find, .findById, .findByIdAndUpdate, .exec, etc.

### Links

When the cheatsheet is not enough, however (or if you'd like to read
further about the library), here are some links. Keep in mind, that
while the documentation may be fragmented and frustrating, there is a
lot of good information here!

- [The GitHub site has the code and a nice, clear quick start guide.][mg-github]
- [The docs also have a quick start.][mg-quick]
- [The docs follow that with a more comprehensive guide.][mg-guide]
- [Finally, there is a complete API reference in the docs.][mg-api]

<!-- LINKS -->

[mg-github]: https://github.com/Automattic/mongoose
[mg-quick]:  http://mongoosejs.com/docs/index.html
[mg-guide]:  http://mongoosejs.com/docs/guide.html
[mg-api]:    http://mongoosejs.com/docs/api.html
[lesson]:    https://github.com/ga-students/WDI_DTLA_8/tree/mongoose/work/w07/d03/instructor/mongoose
