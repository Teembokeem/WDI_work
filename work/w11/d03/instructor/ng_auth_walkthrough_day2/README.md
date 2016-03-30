## Refactoring 1

- Shared behavior and data around **auth**entication/authorization:
  - authenticate as a user, ie *log in*,
  - unauthenticate, ie *log out*,
  - is authenticated / *is logged in*?
  - [information about the current token/user][jwt].
- Shared behavior around the **user resource**:
  - creating a user,
  - information about the authenticated user (ie, *current user*),
    *[Ed: A spirited discussion may be had with Jim about the purpose of 
    `/me` routes.]*
  - updating an authenticated user's information.

*For decoding JWTs, see also: 
[`angular-jwt`][ng-jwt].*

## User Stories

##### Step One

- [ ] AAU, when I am already a registered user, I can (sign in) log in 
      w/ an email & password.
- [ ] AAU, after sign in (sign up or log in), I am immediately directed
      to the welcome page.

> Here we are going to start re-using some of the auth behavior we've 
> already written: how will that change how we see our functions?
> We also need to instigate a `ui-router` "state" change programmatically,
> ie **not** from a user interacting with a `ui-sref` directive. We also

##### Step Two

- [ ] AAU, when I try to sign up (create a user) with an email that is 
      taken, I will be alerted about this.
      - [ ] *Must wireframe first…*
- [ ] AAU, when I'm authenticated, I see a sign out button in the navbar.

> Here we are going to update the user based on some information from
> the server, specifically a certain type of failed request. We will
> also render conditionally based on our auth status.

##### Step Three

- [ ] AAU, when I am signed in, I see a profile button in the navbar.
- [ ] AAU, when I click on the profile button, I go to the profile page.
- [ ] AAU, when I am not *logged in*, if I try to go to the profile page,
      I will be redirected to the signin page.

> Here we will protect certain states as a whole by authorizing them.
> In order to authorize them, we need to [*run* a configuration][run]
> that registers a listener to our state changes, and attach to states
> [custom data][custom-data] to mark them as authorized.

*For packaging a configuration "run block," in this case, we will break 
the "one component per file" rule!*

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

[jwt]:          https://github.com/auth0/jwt-decode
[ng-jwt]:       https://github.com/auth0/angular-jwt
[interceptors]: https://docs.angularjs.org/api/ng/service/$http#interceptors
[run]:          https://docs.angularjs.org/guide/module#module-loading-dependencies
[custom-data]:  https://github.com/angular-ui/ui-router/wiki#attach-custom-data-to-state-objects
[y171]:         https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#run-blocks
