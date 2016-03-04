# Puppy Population!

<img src="http://www.pamperedpetz.net/wp-content/uploads/2015/09/Puppy1.jpg" width="600">

Alright, let's create a new app that stores and reads data
about puppies from our sweet Mongo database!

### Structure

Create a new folder called `puppies_app`. Inside of it create a
folder `models` where we put our models. Add to the base of the
app the files `listPuppies.js`, `listOwners.js` and `seeds.js`.

In the `models` folder create two models:

- `Owner.js`, and
- `Puppy.js`

```
$ tree
.
└── puppies_app
    ├── listOwners.js
    ├── listPuppies.js
    ├── models
    │   ├── Owner.js
    │   └── Puppy.js
    └── seeds.js
```

### Models

Owners:

- First name,
- Last name,
- City

Puppies:

- Name,
- Breed
- Age (I know, sorry, let's just roll with it…)

Owners also have multiple puppies, and puppies belong to owners.

### CRUD

Make sure the files do this:

- `seeds.js` loads 5 owners and 5 puppies into the database,
- `listPuppies.js` prints the puppies to the screen with
  their owner's full names,
- `listOwners.js` prints the owners to the screen with their
  puppies names.

### Bonus

Allow the puppies to have multiple owners, and make sure that
when you print the puppies you list each of their owners!
