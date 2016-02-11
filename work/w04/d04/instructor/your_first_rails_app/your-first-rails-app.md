#Lord of the Rails Trilogy: Our First Rails App!

![LOTR](http://i.imgur.com/KTTNYFg.png?1)

##Learning Objectives
* get acquainted with Rails, including:
    * Rails generators
    * models, views, controllers
    * routes
    * embedded Ruby
* build an app with full CRUD functionality

##Roadmap
Here's how we're going to learn Rails:  through lots of exposure, repetition, and deep dives into the different facets of Rails.

Our first app will be deliberately simple so that we can see how Rails works without a lot of distractions and confusion.

* **Lesson 1:**
    - MVC
    - rails new
    - learning our way around a Rails app
    - rails scaffold
    - routes, controller actions, views
    - using the index action to see all the records in our database

* **Lesson 2:**
    - accessing individual records using the show action
    - adding new records to our database using the new and create actions

* **Lesson 3:**
    - modifying existing records by using the edit and update actions
    - removing records from our database by using the destroy action
    - Adding some navigational links to make the site easier to use

##WTF MVC?
Rails is organized around the Model, View, Controller (MVC) design pattern.

* **Models:** (from the Rails docs): "A model represents the information (data) of the application and the rules to manipulate that data. In the case of Rails, models are primarily used for managing the rules of interaction with a corresponding database table. In most cases, one table in your database will correspond to one model in your application. The bulk of your application's business logic will be concentrated in the models."

* **Views:** (from the Rails docs): "Views represent the user interface of your application. In Rails, views are often HTML files with embedded Ruby code that performs tasks related solely to the presentation of the data."

* **Controllers:** (from the Rails docs): "Controllers provide the 'glue' between models and views. In Rails, controllers are responsible for processing the incoming requests from the web browerser, interrogating the models for data, and passing that data on to the views for presentation."

##What is Ruby on Rails?
From http://rubyonrails.org/: "Ruby on Rails is an open-source web framework that's optimized for programmer happiness and sustainable productivity.  It lets you write beautiful code by favoring convention over configuration."

####A Word About Convention Over Configuration
Ruby on Rails has lots of rules and opinions about how Rails applications should be built. As long as we play by Rails' rules--rules that we'll be learning in the coming weeks--then we can focus our efforts on solving problems and builing great apps instead of writing all of the plumbing code to wire everything up.

##Let's Do This!