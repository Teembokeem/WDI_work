## After Hours
### Retrofitting a Rails App Into an API
Your objective for this lab is to:

* Make sure that your API can accept cross-origin AJAX requests with CORS.
* Make sure your routes and controllers are namespaced to `/api`.
* Make sure your API sends and receives JSON. You should be able to interact with it 100% using Postman (or Angular's `$http` or `$resource`!).
* Your API should expose the following routes:

Method   | Route           | Outcome
---------|-----------------|--------
`GET`    |`api/horses`     | All Horses.
`GET`    |`api/horses/:id` | A Horse with `id`.
`POST`   |`api/horses`     | Create a new Horse.
`PUT`    |`api/horses/:id` | Update an existing Horse.
`DELETE` |`api/horses/:id` | Destroy a Horse.

### Bonuses
* Implementing authentication with JWT would be a huge plus.
* Making an Angular front-end to consume your API (maybe using `$resource`?) would be great prep for next week.
* Try deploying your API to Heroku! It's no different from deploying an ordinary Rails app with Postgres. 