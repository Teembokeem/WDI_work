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

###Create your new app

1. `rails new coffeeshop --skip-test-unit`
    
    This command will create a new Rails app called "coffeeshop".  We use the "--skip-test-unit" flag because we not be using Rails' built-in testing tools for this application.

2. `$ cd coffeeshop`

    When we ran the `rails new` command in step one, it created a new directory called "coffeeshop", where all our application code will live.

3. `$ subl .` to open our app in Sublime Text.

4. Before we move on, let's spin up a rails server and cruise over to `localhost:3000` in our browser to make sure that everything has gone right so far.

###Generate a model

1. `$ rails g model Bean name roast origin quantity:float`

    * The **rails g model** part of the command will generate a new model for us.
    * The first word after **rails g model** is the name of our model (in this case, `Bean`).  **Model names are ALWAYS singular in Rails.** 
    * All the subsequent words in this command will be names of our model attributes.  The default data type for these attributes is "string".  If you want to use a different data type, you specify that as follows: "**name:type**".  See how we specified "**quantity:float**" above.

2. We can see that, in addition to creating a new file called `bean.rb`, Rails also created a new migration file for us.  For now, let's not worry about what this file is or what it does--we will be talking about that in great detail in the coming days.  We do, however, need to run that migration file to add a new table to our database, which we can do like this:

    ```
    $ rake db:migrate
    ```

3. Once your model has been generated, a new Ruby file will be created in the **app/models** directory, named after your model.  In our case, it will be called `bean.rb` and it will look something like this:

    ```ruby
    class Bean < ActiveRecord::Base
    end
    ```

4. OPTIONAL STEP: we can create some seed data in our database so that we will have some database records to work with right away.
    
    * To do this, open the **db/seeds.rb** file.  The comments in this file can be a helpful reference for how to create seed data.  The convention is to declare a variable named as the plural form of your model name if you are going to create multiple records.

    * For our app, we will seed some been records like this:

    ```ruby
    beans = Bean.create([
        {name: "Jim's Jittery Java", roast: "medium", origin: "The OC Baby", quantity: 100},
        {name: "Phil's Freaky Brew", roast: "hella strong", origin: "Ohio", quantity: 101}
      ])
    ```

    * `$ rake db:seed`
        
        This command will run our `seeds.rb` file and add these records to our database.  Note that if we were to run this command twice, we would get duplicate data in our database.
    * `$ rails c`
        
        Run this command to open our Rails console and confirm that our data was successfully added to our database.

###Generate a controller (and a views directory)

1. `$ rails g controller beans`
    
    * this command will generate a new controller that is associated with our Bean model.
    * your controller name should **ALWAYS be a plural version of the model it is associated with**.
    * generally speaking, you will have a one:one relationship between models and controllers in your Rails applications.
    * Rails will create a few things as a result of running the **rails g controller** command:
        * a controller file (in this case, **beans_controller.rb**), which lives in **app/controllers**
        * a stylesheet and a coffeescript file
        * a new directory for beans in the **app/views** directory.

###Controller actions, routes, and views
And now, the meat and potatoes of Rails!  We are going to talk about controller actions, routes, and view templates.  You can do the following controller action/route/view template steps in any order, but Rails errors will prompt you for a route first, then a controller action, and then a view template.

####Index
**Index** is generally used to list all (or a segment of) items from a given model that exist in your database.  The HTTP verb for index is **GET**.

#####Controller Action
* We will define the **index** action in our controller like this:

    ```ruby
    def index
      @beans = Bean.all
    end
    ```

* Because this controller action will be responsible for retrieving multiple records, our instance variable (`@beans`) is plural, while the model name (`Bean`) is singular.
* `@beans` will be an array containing all of the Bean records that exist in our database.
* Note that we must call this controller action "**index**".

#####Route
* We need to define a route in our **routes.rb** file, which will tell our app what to do when it receives an HTTP request from a client.  We'll do this in our **config/routes.rb** file:

    ```ruby
    get "beans/" => "beans#index"
    ```

* Let's break that [route](https://en.wikibooks.org/wiki/Ruby_on_Rails/Routing) definition down:
    * the first thing we declare is the HTTP method to which this route will respond
    * the second thing we declare is the URI that requests will come from (what we'll see in the address bar of our browser, in this case **localhost:3000/beans**)
    * on the right side of the hash rocket, we see the **controller/action pairing** that we just defined in our beans controller (`beans` references our controller, `index` references the action defined in that controller)

#####View Template
Now that we have a controller action and a corresponding route, let's build a view template so that we can actually see all of our beans in our browser.

1. Navigate to the **app/views/beans** directory and create a new file called **index.html.erb**.  This file must be called "index" to correspond with our index controller action and our index route.  The "erb" file extension stands for "embedded Ruby".

2. Remember that our index controller action is returning an array of all our Bean objects.  With that in mind, you should know that index views generally loop through all the instances of a given model.  So, let's take a look at how to iterate through this array and display information about each bean in our view.  This code will go in our **index.html.erb** file:

    ```erb
    <h1>Today's Beans</h1>

    <ul>
        <% @beans.each do |bean| %>
            <li>
                <strong> <%= bean.name %> </strong> - <%= bean.roast %>
            </li>
        <% end %>
    </ul>
    ```

3. Notice the erb syntax in this code (`<% ... %>` and `<%= ... %>`).  The equal sign denotes that the contents should be evaluated and then displayed in the view, while the absence of an equal sign means that the content should only be evaluated but not be displayed in the view.

4. Note that all of the view templates we create will be dynamically inserted into the `<%= yield %>` tag inside the application.html.erb file.

5. At this point, let's run `rails s` in our project directory and go to `localhost:3000/beans` in our browser to see our handiwork.

####Show
**Show** is generally used to provide details about a single record.  The HTTP verb for show is **GET**.  Just like with **index**, we will need a controller action, a route, and a view template for **show**.

#####Controller Action
* We will define the **show** action in our controller like this:

    ```ruby
    def show
      @bean = Bean.find(params[:id])
    end
    ```

* Because this controller action will be responsible for retrieving a single record, our instance variable (`@bean`) is singular, as is the model name (`Bean`).

* `find` is a method available to our Bean model that takes in a single parameter.  In this case, we will be giving it the id of a bean.  Behind the scenes, Rails will query our database to find the bean record that has that id.  Because database ids are always unique, we can be assured that the `find` method will only return one record.

* Note that we must call this controller action "**show**".

#####Route
* We need to define a route in our **routes.rb** file, which will tell our app what to do when it receives an HTTP request from a client.  We'll do this in our **config/routes.rb** file:

    ```ruby
    get "beans/:id" => "beans#show", as: :bean
    ```

* The `as: :bean` at the end of our route definition sets a **named route** of **bean_path** that we can use throughout the app to refer to this route.  We'll see later how this can be helpful.

#####View Template
Now that we have a controller action and a corresponding route, let's build a view template so that we can actually see a specific bean in our browser.

1. Navigate to the **app/views/beans** directory and create a new file called **show.html.erb**.  This file must be called "show" to correspond with our show controller action and our show route.

2. Remember that our show controller action is returning a single Bean object, which we assigned to the `@bean` instance variable.  With this in mind, we can display information about a specific bean as follows:

    ```erb
    <h1> <%= @bean.name %> </h1>

    <p>This coffee is a <%= @bean.roast %> roast from <%= @bean.origin %>, and we have <%= @bean.quantity %> pounds available.</p>

    <%= link_to "Back to the list!", beans_path %>
    ```

3. Notice that we added a `link_to` that will send a user back to the **index** view (represented by it's **named route**, `beans_path`).  The named route for an index view will always be **the plural name of the model followed by an underscore and the word 'path'**.

4.  Let's check out our handiwork!  We will need an ID for one of our beans, which we can grab by checking out our Rails console and looking up the ID of one of our beans (`Bean.first.id`).  Make sure your Rails server is running (`rails s`) and then navigate to `localhost:3000/beans/YOUR_ID_HERE`.

####New
**New** is generally associated with a form to create new records.  It is one half of the **new/create** pairing that is needed to save a record in our database.  It is important to note that the **new** action alone does not save a record.

The **create** action will utilize an HTTP POST method, but the HTTP verb for **new** is **GET**.

Just like with index and show, we will need a controller action, a route, and a view template for **new**.

#####Controller Action

* We will define the **new** action in our controller like this:

    ```ruby
    def new
      @bean = Bean.new
    end
    ```

* Because we want to create a single new item, we set an instance variable (`@bean`) that will correspond to just that item.

#####Route
* We need to define a route in our **routes.rb** file, which will tell our app what to do when it receives an HTTP request from a client.  We'll do this in our **config/routes.rb** file:

    ```ruby
    get "beans/new" => "beans#new", as: :new_bean
    ```

* because the routes in our **routes.rb** file are read top to bottom, we need to make sure that we put this route _before_ the route for our show action.  

* The `as: :new_bean` at the end of our route definition sets a **named route** of **bean_path** that we can use throughout the app to refer to this route.  We'll see later how this can be helpful.

#####View Template
Now that we have a controller action and a corresponding route, let's build a view template with a form so that we can add a new bean to our database.

1. Navigate to the **app/views/beans** directory and create a new file called **new.html.erb**.  This file must be called "new" to correspond with our "new" controller action and our "new" route.

2. Generally we will use a form to add a new record.  Here's how we'll build out our form:

    ```erb
    <h1>Add a new bean!</h1>

    <%= form_for @bean do |f| %>

        <div>
            <%= f.label :name %>
            <%= f.text_field :name %>
        </div>

        <div>
            <%= f.label :roast %>
            <%= f.text_field :roast %>
        </div>

        <div>
            <%= f.label :origin %>
            <%= f.text_field :origin %>
        </div>

        <div>
            <%= f.label :quantity %>
            <%= f.text_field :quantity %>
        </div>

        <%= f.submit "Add new bean!" %>

    <% end %>

    <%= link_to "Back to the list!", beans_path %>
    ```

3. Notice that we have a submit button that will work once we add our **create** controller action in a few minutes.

4. At this point, we can navigate to `localhost:3000/beans/new` to take a look at our form and the HTML elements that our Rails form helper built for us.  But this form won't work yet!  For that, we will need...
