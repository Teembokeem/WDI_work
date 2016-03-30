## Refactoring 1

- Shared behavior and data around **auth**entication/authorization:
  - authenticate as a user, ie *log in*,
  - unauthenticate, ie *log out*,
  - is authenticated / *is logged in*?
  - [information about the current token/user](https://github.com/auth0/jwt-decode).
- Shared behavior around the **user resource**:
  - creating a user,
  - information about the authenticated user (ie, *current user*),
    *[Ed: A spirited discussion may be had with Jim about the purpose of 
    `/me` routes.]*
  - updating an authenticated user's information.

See also: [`angular-jwt`](https://github.com/auth0/angular-jwt).

## User Stories

##### Step One

- [ ] AAU, after sign in, I am immediately directed to the welcome page.
- [ ] AAU, when I am already a registered user, I can (sign in) log in 
      w/ an email & password.

> Here we need to instigate a `ui-router` "state" change programmatically,
> ie **not** from a user interacting with a `ui-sref` directive. We also
> are going to start re-using some of the auth behavior we've already
> written: how will that change how we see our functions?

##### Step Two

- [ ] AAU, when I try to sign up (create a user) with an email that is 
      taken, I will be alerted about this.
      - [ ] *Must wireframe first…*
- [ ] AAU, when I'm authenticated, I see a sign out button in the navbar.

> Here we are going to update the user based on some information from
> the server, specifically a certain type of failed request. We will also
> render conditionally based on our auth status.

##### Step Three

- [ ] AAU, when I am signed in, I see a profile button in the navbar.
- [ ] AAU, when I click on the profile button, I go to the profile page.
- [ ] AAU, when I am not *logged in*, if I try to go to the profile page,
      I will be redirected to the signin page.

> Here we will protect certain states as a whole by authorizing them.

##### Step Four

- [ ] AAU, when I am on the profile page, I see an update form.
- [ ] AAU, I can update my user info.
  - [ ] Update user info on the server.
  - [ ] Update user info in the token (by generating a new token…).
- [ ] AAU, if I try to update my user info, but I am not *logged in*,
      I will be redirected to the signin page.

> Here we will make an authenticated request: in order to do this we
> will need to edit our request headers.

## Refactoring 2

- Create a special type of service that will set the headers 
  automatically on every request, called an interceptor. You can also
  [use interceptors][interceptors] to handle certain types of responses 
  or errors!

## Ice Box

- [ ] AAU, if I try to update my profile to have an email that is taken,
      I will be alerted.
- [ ] AAU, when I click on *Forgot my password*, I get a notification to
      change it.
  - [ ] *Must wireframe first…*

<!-- Links -->

[interceptors]: https://docs.angularjs.org/api/ng/service/$http#interceptors
