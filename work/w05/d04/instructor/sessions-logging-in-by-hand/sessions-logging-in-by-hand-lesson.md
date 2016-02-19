![](https://trtpost-wpengine.netdna-ssl.com/files/2013/09/rubyonrailscookies-680x400.jpg)

# Sessions & Logging in by Hand
---

## Objectives
*After this lesson, students will be able to:*

- Create a `sessions` controller that will persist a user's login

- Authenticate (login) a user

- Write a helper method that returns the logged in user model

- Log out a user

- Restrict access to specific routes to logged in users only (authorization)

## Intro to Managing Sessions

When a user attempts to login, we will look them up in the database using their `email` and call the `authenticate` method along with the password provided by the login form.

That sounds pretty easy, but think about what happens when the `authenticate` method returns true - we have an authenticated user model in our hot little hands at that very moment, but then what?

All is lost the very next request/response cycle - unless we find a way to "remember" that a user has logged in and who that user is.

This lesson will cover a common approach used to "persist" the fact that we have a logged in user.

Here's an outline of what we're going to do:

- Allow a user to submit their email/password for authentication.
- Find the user in the database with that email, and call the `authenticate` method on that user instance passing in the password as an argument.
- If `authenticate` does not return false, save the user's `id` in Rails' special `session` object.
- On each request, check for the `id` in the `session`, and fetch the user from the database so that we can access the user's information in our controllers and views.
- The session will automatically end if the user closes the browser. However, we will also provide a logout link that will go to a controller#action dedicated to removing the `id` from the session.

Ready?  Let's go!

## Starting Code

This lesson picks up exactly where we left off in the previous lesson.

If you followed along in that lesson and are able to create users with the _sign up_ page, then keep building upon that code.

However, if things didn't quite work out, be sure to copy the starter code being provided in this lesson's folder and then prep that code with these commands:

```
? bundle install
? rake db:drop
? rake db:create
? rake db:migrate
? rails s
```

You should now be able to add a couple of users.

## The `SessionsController`

One thing to get used to when developing in Rails is that not much happens  without action code running in a controller.

Conceptually, the `UsersController` is dedicated to CRUD and rendering views related directly to the `users` **resource**. Therefore, the `UsersController` is **not** the place to manage the process of logging in and out.

Instead, it's time to create a controller dedicated to logging users in and out, a _sessions_ controller:

```
? rails g controller Sessions
```

In `sessions_controller.rb` we'll need to add some logic to handle logging a user in and out:  

```ruby
class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: 'Logged in!'
    else
      flash.now.alert = 'Invalid login credentials - try again!'
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out!"
  end

end
```


The first thing to realize is that there isn't a _Session_ model. We haven't generated a model, and we don't need to. _Sessions_ are not persisted in a database, so we don't need a model!<br>**We used a controller last week that didn't have a related model - remember what we used that controller for?**

Let's go through this line by line:

- `new` action:
  - This action simply results in `new.html.erb` (our Login page) being rendered.

- `create` action:
  - This is the action that will run when the user submits the Login form. All the authentication logic happens in here.
  - First, we try to find a user that matches the _email_ the user entered into the login form. Note the use of the `find_by` method instead of the `find` method.
  - If we find the user, we call the `authenticate` method passing in the _password_ available in the `params` hash.
  - If the authentication does not return false, we:
      - Set a `user_id` key on Rails' `session` object. This object is implemented using a special type of cookie that only the server can access. More importantly, this hash survives over multiple requests/responses.
      - Redirect to the root route.  The `notice:` hash is a shortcut for `flash[:notice]`.
  - Otherwise, if the authentication returns false, back to the login form we go and an 'Invalid login credentials' will be displayed. We have to use the `flash.now` method because we are rendering within the same request.
- `destroy` action:
  - The user clicked the Logout link to get to this action, so set `session[:user_id]` to `nil` and the user will be "forgotten".

## Add Routes to Map to `SessionsController` Actions

Remember, routes map to controller#actions. If there are no routes that map to a controller#action, it's not going to get called.

So, we need routes for our `SessionsController`.  We've been using the nifty `resources` method in `routes.rb` to generate routes for us - and there's no reason to stop now!  However, we only need `new`, `create` and `destroy` actions, which we can specify by using the `only:` option.

However, because the RESTful route for logging in, `/sessions/new`, may look weird to our users, we're also going to create a **custom** route that's more visually appealing (in the address bar of the browser) for logging in:

After adding the routing described above, our `routes.rb` will look something like this:  

```ruby
Rails.application.routes.draw do
  root 'houses#index'
  resources :houses
  resources :users, only: [:new, :create]

  # Create a better looking URL for logging in
  resources :sessions, only: [:new, :create, :destroy]
  get '/login', to: 'sessions#new'
end
```

>Note: Stick to RESTful routing conventions when dealing with resources. However, feel free to create _custom_ routes as you see fit or as your app requires.

## The Login View

With controller and routes in place, let's write the `erb` that will be displayed when the user clicks a Login link.

First, create the file:

```
? touch app/views/sessions/new.html.erb
```

This `erb` will display a login form:

```html
<h1>Login</h1>
<p id="alert"><%= alert %></p>
<%= form_tag sessions_path do %>
  <div class="field">
    <%= label_tag :email %>
    <%= text_field_tag :email, params[:email] %>
  </div>
  <div class="field">
    <%= label_tag :password %>
    <%= password_field_tag :password %>
  </div>
  <div class="actions"><%= submit_tag "Log in" %></div>
<% end %>
```

**If we forget what _path helpers_  are available, or how they are named, what can we do?**

**You may have noticed that we're using a `form_tag` and other helpers here that differ from the `form_for` and the other helpers we used for the sign up form in the previous lesson. Does anyone know why?**

## Login!

If your Rails server isn't already running, start it up.

Next, create a new user if you don't have any, or if you can't remember the credentials you created last lesson.

We don't have a login link yet, so we have to enter the appropriate URL in the address bar.

**There are two URL's we can enter in the address bar to login, what are they?**

Go to one of them and you will be greeted with a login page.

Login with valid credentials and you should be redirected to the root and see a _Logged in!_ message.

If your log in was not successful, you will see the login page again along with a _Invalid login credentials - try again!_ message.

Try it out with both routes.

## Logout

Because the route that maps to `sessions#destroy` has a HTTP verb of `delete`, we will have to wait to create a cool link to logout. We will do that in a bit.

If you feel the need to logout and you just can't wait, you can always close your browser :)

## Putting the `ApplicationController` to Good Use

You're already aware of the power of **inheritance** in object oriented programming.

You're seen how all of our controllers derive from the `ApplicationController`.  This inheritance allows the `ApplicationController` to pass along its functionality to any class that derives from it, just as our controllers do.

So, if we add methods to the `ApplicationController`, those methods will be available in all of our controllers!

Let's leverage the power of inheritance by writing a helper method, **`current_user`**, which will return the model for the currently authenticated user.

In `app/controllers/application_controller.rb`:

```ruby
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
  
  	 # Make the current_user method available to views, not just controllers!
    helper_method :current_user

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
end
```

The line of code `helper_method :current_user`, allows us to call the `current_user` method in views, in addition to the controllers.

**Congrats!** The `current_user` method can be really helpful by allowing our views to show different information depending on there being a user logged in or not.

For example:

- If a user is logged in, display their name in the top nav bar.
- If a user is logged in, display a _logout_ link, otherwise display a _login_ link.

## Improving Our Layout View

As described earlier, let's change the `layouts/application.html.erb` page to display different HTML based upon a user being logged in or not:

- **Logged in**: Show a welcome message along with the user's name; and a link to logout.
- **Not logged in**: Show two links, one for logging-in and another one for signing-up.

Remove this snippet that we added above `<%= yield %>` last lesson:

```html
<p>
  <%= link_to 'Sign Up', new_user_path %>
</p>
```

and replace it with this:

```html
<p>
  <% if current_user %>
    Welcome, <%= current_user.name %>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <%= link_to 'Logout', session_path('dummy'), method: :delete %>
  <% else %>
    <%= link_to 'Login', login_path %>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <%= link_to 'Sign Up', new_user_path %>
  <% end %>
</p>
```

The _Logout_ link will go to the `sessions#destroy` action.

Note the `session_path('dummy')` path helper?<br>**Kudos if you can explain why we need to pass in a "dummy" argument!**

**What's else could we do if we wanted to use a regular `get` verb link to logout?**

**Congrats!** - you can now logout!

### Test it Out!

You should now be able to `sign up`, `login` and `logout`!

### For Future Reference :)

The `current_user` method is more useful than perhaps you realize!

Remember, the `current_user` method returns the model instance of the currently logged in user; and with it available to all of your controllers, when you go to create instances of other models, like a _comment_ for a blog post for example, you will be able to assign who created it with code like this:

```ruby
@comment.author = current_user
``` 
How cool is that!

## Improving the User Experience

Here's the scenario:
>A visitor just signs up as a user for your application, however, they must then turn around and immediately login. That sucks and it will piss your users off!

In Rails, all it takes is one line of code to prevent this and automatically log in your users after they sign up.

In the `create` action in `users_controller.rb`:

```ruby
  def create
    @user = User.new(user_params)
    if @user.save
      # add the line below to automatically login a new user
      session[:user_id] = @user.id
      flash[:notice] = "You have successfully signed up!"
      redirect_to root_path
      ...
```

That's it, one line of code, and now your users won't hate you!

## Restricting Access to Certain Routes

We've got **authentication**  working just swell. Now it's time to touch upon **authorization**.

The goal of authorization is to restrict access to certain controller actions based upon the authenticated user's permissions, or _roles_.  However, we're not going to implement _roles_ in this lesson, instead, we will simply restrict access to certain routes depending upon whether the user is logged in, or not.

Once again, we can use our `ApplicationController` to provide a method with some special functionality.

The method will make it easier to check in our controllers if there's an authenticated user.

Using something called a _before\_action_ filter, we can have this method automatically called on the some or all of a controller's actions - it's your decision!

If a user tries to access a route that requires an authenticated user, in this app, we will redirect to the login route.

In `application_controller.rb`, at the bottom, add:

```ruby
# Other code above
    def authorize
      redirect_to login_path, alert: 'Not authorized - you must be logged in!' if current_user.nil?
    end
```

In a moment, we'll see how we can easily call this `authorize` method from any controller that needs to restrict access to any of its actions. But first, a quick question:

**Notice that we did not make the `authorize` method a `helper_method` like we did with `current_user`. Why not?**

Now, to demonstrate authorization, let's use our new `authorize` method to disallow creating or editing new houses, unless the user is logged in. So basically, a visitor that is not logged in will only be able to view the `index` and `show` pages.

**What actions will we need to restrict access to?**

Cool, now let's see the single line of code we need to add at the top of our `HousesController`:

```ruby
class HousesController < ApplicationController
  before_action :set_house, only: [:show, :edit, :update, :destroy]
  #  add the line below
  before_action :authorize, except: [:index, :show]
```

The `before_action` will execute the method corresponding to the name passed as an argument - before allowing the code in the targeted action to run.

The `except` option works almost like the `only` option that you've already seen - just the opposite.

In this app, we want to run the `authorize` method before all actions, _except_ for `index` and `show`.

Check it out!

**Congrats on implementing authorization!**

## Questions

Take a minute to review, then I will go to the picker:

- **What is the name of the controller we use for coding our application's login and logout logic**?

- **If we want all of the controllers we code to have a method common to all of them, what do we do?**

- **How do we make a method in a controller callable from inside of a view?**

- **What is the name of the special Rails object that allows us to persist data between multiple requests?**

