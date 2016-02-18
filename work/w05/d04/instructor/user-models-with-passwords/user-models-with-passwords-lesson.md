
<img src="http://www.hak9.com/wp-content/uploads/2013/01/timthumb.php_-300x98.png" style="width:950px">

# User Models with Passwords
---

## Learning Objectives
*After this lesson, students will be able to:*

- Explain the difference between Authentication & Authorization

- Explain how `has_secure_password` works

- Create a user model with `has_secure_password`

- Save a user with a hashed password

## Intro to Authentication

### Why We Need Authentication

Our app's functionality often revolves around a particular user. For example, when we use online banking, or more importantly, save songs to our personal playlists in Spotify!

### What is Authentication?

- Authentication is about your app knowing the **identity** of the person accessing it.

- The process of authentication includes the user logging in, usually with their email or a username, and a password.

- Later in WDI, we will learn about OAuth, which is when we are able to login using our Facebook, Twitter, GitHub, etc. credentials.

#### Isn't There a Gem for Authentication?

- There are several gems, such as Devise and OmniAuth, that implement authentication in Rails applications.

- However, Rails makes "hand rolling" our own username/password authentication relatively painless. It's lean and effective.

- For basic username/password authentication, libraries such as Devise, are simply overkill.

- Later, if you do decide to use a library, at least you'll have an understanding of the moving parts.

#### Authentication vs. Authorization

_Authentication_ and _authorization_ are not the same thing:

- **Authentication** verifies a user's identity.

- **Authorization** determines what functionality a user has access to. For example:
	- Logged in user vs. an anonymous visitor
	- What role(s) have been assigned to a particular user.  For example, a user with an _admin_ role can access administrative functionality.

#### Encryption & Hashing?

There is a subtle difference between _encryption_ and _hashing_:

- **Encryption** is the process of encoding data so that it cannot be understood unless it is decoded using a key.

- **Hashing** is a one-way process that makes it practically impossible to invert back to the original value once it has been hashed.

**Which method, _encryption_ or _hashing_, do you suppose is the better approach when it comes to "hiding" a user's password?**

## Intro to Authentication - Questions

- **Explain the difference between _authorization_ & _authentication_?**

- **If we _encrypt_ a password, would it be possible to decrypt it?**

## How to Add Password Authentication to a Rails App

Cool, now that we know what authentication is and why we need it, here's a peek at what we're going to do in this lesson:

- Create a `User` model that utilizes Rails' `has_secure_password` helper method.

- Implement a _sign up_ page that will enable the app to create new users.

In the next lesson, we'll build upon the app in this lesson to:

- Implement a _login_ page that will allow users to login.

- Persist the login for the duration of the session.

- Automatically login a new user.

- Add some basic authorization.

## A Peek at the Finished App by End of Day

Let's take a look at the final app we are building today that uses authentication and authorization...

## Setup our App

To learn how to roll our own authentication system, we're going to first build a minimal app by generating a scaffold.

### Scaffolding our `houses` Resource

We will scaffold the app to save time and give us a working app that we can add auth to, however, never scaffold any of your apps in WDI - **a scaffold is for demonstration/learning purposes only!**

Here we go. In your code folder:

```sh
? rails new homes_for_sale -d postgresql -T
```
```sh
? cd homes_for_sale
? rake db:create
```

Now lets scaffold a `House` model, along with its routes, controller and views (and a touch of CSS):

```sh
? rails g scaffold House address bedrooms:integer baths:float price:integer
```

**Now that we generated a model, what do we need to do?**

### Enable the `bcrypt` Library

`bcrypt` is a library that provides encryption and hashing algorithms to developers.

ActiveRecord uses it behind the scenes to hash passwords.

Because `bcrypt` is so popular, it exists in the `Gemfile` by default, however, it is commented out.

`? subl .`

then, uncomment the `bcrypt` gem in the `Gemfile`.<br>**Then what do we need to do?**

### Ladies and Gentlemen, Start Your Server!

Now let's:

- Start our Rails server (better to do so in another Terminal window)
- Browse to `localhost:3000`

There's the familiar "Welcome aboard" page.

**We want to greet our users with the current list of all houses instead - what do we need to do?**

Let's add a couple of houses and briefly explore the app.

## Add a `User` Model for Authentication

If our app is going to manage users, we will need a `User` model so that we can CRUD and authenticate them - right?

In most apps, a model named `User` is peachy, however, depending upon the app's 
purpose, it might make sense to name it something else, e.g., if the app were a game, perhaps a model named `Player` would be more suitable.

### The Magic of `has_secure_password`

`has_secure_password` is a wonderful helper method in ActiveRecord.  We can use in our `User` model and it will handle the heavy lifting of authentication for us.

Here is what `has_secure_password` does for us when we add it to a model class:

- Verifies the presence of a `password` key/value in the hash of user info we are passing to the `User.new` or `User.create` method.
- If we also provide a `password_confirmation` key/value, which is highly recommended, ensure that its value matches that of `password`.
- **Salts** & Hashes the `password` and persists it in an attribute named `password_digest` - **a string attribute that we are responsible for creating** on the `User` model.

> Do we need "pepper" to go with our salt?

The last piece of magic `has_secure_password` provides us with is an `authenticate` instance method that we will call to check if a provided password successfully authenticates the user.

### Creating our `User` Model

Let's create our user model, but before we do, please read this public service announcement:

> PSA: We do not want or need to specify the `password` or `password_confirmation` attributes when generating our model. `has_secure_password` will automatically create these as "virtual" attributes, which means they are in-memory attributes only and will not be stored in the database. We only need to specify a `password_digest` attribute for `has_secure_password` to store the hash in. Thank you for listening and happy coding.

Now, with that out of the way...

```
? rails g model User name email password_digest
```

**What's our next move?**

Cool, now let's add this _magic_ we've been talking about to our `User` model. In `user.rb`:

```ruby
class User < ActiveRecord::Base
  has_secure_password
end
```

Bam!  Authentication magic is now available.

### Validating the `email` Attribute

In this app, we are going to be using a user's `email` as their username. In essence, **the email will identify who a user is, therefore we must ensure what?**

This will do the trick:

```ruby
class User < ActiveRecord::Base
 has_secure_password
 # Verify that an email exists and that it does not already exist in the db
 validates :email, presence: true, uniqueness: true
end
```

### Test Drive our `User` Model

Time to check check out the magic. Open up the Rails console:

```
? rails c
```

Then...

```ruby
user = User.new
user.name = "Snoopy"
user.save
=> false
user.errors.messages
=> {:password=>["can't be blank"], :email=>["can't be blank"]}
# Note: Errors are updated only after the save method is called
user.email = "snoop@email.com"
user.save
=> false
user.password = "abc123"
user.password_confirmation = "no-match"
user.save
=> false
user.errors.messages
=> {:password_confirmation=>["doesn't match Password"]}
user.password_confirmation = "abc123"
user.save
=> true
user.password_digest
=> "$2a$10$qx9N.4Y/EBDWTGEZuUqTAeHdgzlOn5cAuF14mlBv21IkQ39JwjfsW"
user.authenticate "bad"
=> false
user.authenticate "abc123"
=> #<User id: 1...
```

> The long string of characters returned when we call the method `user.password_digest` is the salted & hashed password!
 
Thanks to the use of _salt_, if we were to re-set the user above's `password` to the same value of "abc123" and `save` the user, the hash would have a different value because the hash is generated using a random salt value every save.

Okay, the magic show's over, `? exit` or `? quit` to get out of the Rails console.

Our `User` model is ready to go for this lesson. In your apps however, you will want to look into _validations_ further. [Here's a good place to start](http://guides.rubyonrails.org/active_record_validations.html).

## Implement a Sign Up Form

### Outlining What Needs to be Done - Exercise (5 mins)

Okay, so we know we can create users manually in the Rails console, but let's continue to build-out our app so that we can allow visitors to our site to sign up!

If it isn't already clear, when a visitor _signs up_, that's when our app will need to create a new user model and persist it in the database.

Very similarly to how our app currently creates new houses, an outline of what needs to be done to provide sign-up functionality is listed below.

Please review this outline and record your answers, which we will review in 5 minutes:

1. Display a _sign up_ link in `/layouts/application.html.erb`.
	- **This link will have its _href_ attribute set to what value?**

2. **What _controller#action_ will this _href_ map to?**

3. Display the sign up page when the link is clicked.
	- **What folder will this view be stored in and what will its filename be?** 

4. We will need a form on the sign up view for the user to enter their _name_, _email_, _password_ and _password\_confirmation_. Rails has a helper that we will use to generate our `<form>` element. The `<form>` element will have a `method` (HTTP Verb) and an `action` (URI path) attribute that Rails will assign values to for us.
	- **What will the value of the _method_ attribute (HTTP verb)?**
	- **What will be the value of the _action_ attribute (URI path)?**<br>If you get stuck on the above two questions, answer question 5 first, then come back...

5. **When the submit button is clicked, the form will be submitted to what controller#action?**

>Hint: The answers to all of the above questions are based upon the methodology of RESTful resources/routing. Even though we don't have our routes for the `users` resource yet, you can look at the routes for the `houses` resource for guidance.

### Generate a Controller for the `users` Resource

Now let's generate a users controller with the two actions that we need to create a new User:  

```sh
? rails g controller Users new create
```

In `controllers/users_controller.rb` let's write the code for the `new` and `create` actions that have been stubbed up for us:  

```ruby
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "You have successfully signed up!"
      redirect_to root_path
    else
      render 'new'
    end
  end

  private
    # Implement Strong Params
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end

```

**Why is considered a best-practice to implement *strong parameters*, as being done with the `user_params` method above?**

> The `flash` is a special session-based hash that is cleared after each request/response making it perfect for passing messages in our views. You can assign to `:notice`, `:alert` or the general purpose `:flash`.  The scaffold put a `<p>` tag right at the top of the `index` view to display a `:notice`.

### Routes for the `users` Resource

Let’s define our routes for our _users_ resource using the `resources` method.

There are two routes that were created when we generated the controller - **delete them**. Here's the way the cool kids would write them instead:

```ruby
resources :users, only: [:new, :create]
```

### Update Our Views

Okay, we've got the routes and controller in place.

Just to review once again:

- The _users#new_ action needs to display the signup view with a form for the user to complete and submit.

- The `create` action is going to use the data in the `params` hash to create a new user and redirect to whatever view we want, in this case, the app's root route. So, **`create` actions do not have a view associated with them.**  When we generated our controller, it created a `create.html.erb` because it's not as smart as we thought - **delete it**, we don't need it.

#### The `new` View

Let's code the sign up form.

In `views/users/new.html.erb`:  

```html
<h1>Sign Up</h1>
<%= form_for @user do |f| %>
  <% if @user.errors.any? %>
    <div class="error_messages">
      <h2>Form is invalid</h2>
      <ul>
        <% for message in @user.errors.full_messages %>
          <li><%= message %></li>
        <% end %>
      </ul>
    </div>
  <% end %>
  <div class="field">
    <%= f.label :name %>
    <%= f.text_field :name %>
  </div>
  <div class="field">
    <%= f.label :email %>
    <%= f.text_field :email %>
  </div>
  <div class="field">
    <%= f.label :password %>
    <%= f.password_field :password %>
  </div>
  <div class="field">
    <%= f.label :password_confirmation %>
    <%= f.password_field :password_confirmation %>
  </div>
  <div class="actions"><%= f.submit %></div>
<% end %>
```

#### Display a _Sign Up_ Link

We're going to need a link to take us to the _sign up_ page.

Let's have Rails build a tasty link for us.  Add this `erb` above the `<%= yield %>` in `layouts/application.html.erb`:

```html
<p>
  <%= link_to 'Sign Up', new_user_path %>
</p>
```

Now, there will be a _Sign Up_ link on every page. In the next lesson, we hide it if the user is logged in.

## Sign Up!

Make sure everything is saved and refresh the app.

If you followed along and don't have any typos, you should be able to sign up (create) users!

Don't forget, you can use the Rails console to display and delete users.<br>**What would we type in Rails console to print out the user that just signed up?**

Next up, we're going to add the ability to log in and add the capability for our controllers and views to know who the logged in user is!

If you didn't get this app to work, don't fret, a working version will be provided as starter code for the next lesson.

## Final Questions

Review for a minute, then to the picker we go!

- **Describe the difference between hashing and encrypting data.**

- **What attribute must we provide on our User model for `has_secure_password` to perform its magic?**

- **In your own words, explain what `has_secure_password` does for your application.**

- **What two actions are needed in the `UsersController` to sign up new users?**
