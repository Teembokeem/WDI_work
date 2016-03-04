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

- `seeds.js` loads 5 owners and 8 puppies into the database,
- `listPuppies.js` prints the puppies to the screen with
  their owner's full names,
- `listOwners.js` prints the owners to the screen with their
  puppies names.

#### Possible data

| First | Last    | City             |
|-------|---------|------------------|
| Jane  | Johnson | Los Angeles, CA  |
| Bob   | Johnson | Los Angeles, CA  |
| Saeed | Mangal  | Santa Monica, CA |
| Jin   | Yu      | Irvine, CA       |
| Magda | Arroyo  | Pomona, CA       |

| Name          | Breed      | Age | Owner |
|---------------|------------|-----|-------|
| Bilbo         | Pug        | 3   | Jane  |
| Jackie Chow   | Chow       | 8   | Saeed |
| Red           | Bloodhound | 15  | Jin   |
| Annabelle     | Dachsund   | 4   | Magda |
| Reggie        | Beagle mix | 2   | Bob   |
| Oscar         | Frenchie   | 3   | Bob   |
| General Grant | Chihuahua  | 1   | Jane  |
| Tuco          | Poodle     | 1   | Jin   |

#### Output/Test

```
$ node seeds.js
#=> Creating owners...
#=> 5 owners created.
#=> Creating puppies...
#=> 8 puppies created.
```

```
$ node listPuppies.js
#=> Bilbo the Pug is owned by Jane Johnson.
#=> Jackie Chow the Chow is owned by Saeed Mangal.
#=> Red the Bloodhound is owned by Jin Yu.
#=> Annabelle the Dachsund is owned by Magda Arroyo.
#=> Reggie the Beagle mix is owned by Bob Johnson.
#=> Oscar the Frenchie is owned by Bob Johnson.
#=> General Grant the Chihuahua is owned by Jane Johnson.
#=> Tuco the Poodle is owned by Jin Yu.
```

```
$ node listOwners.js
#=> Jane Johnson owns:
#=>   Bilbo the Pug
#=>   General Grant
#=> Bob Johnson owns:
#=>   Reggie the Beagle mix
#=>   Oscar the Frenchie
#=> Saeed Mangal owns:
#=>   Jackie Chow the Chow
#=> Jin Yu owns:
#=>   Red the Bloodhound
#=>   Tuco the Poodle
#=> Magda Arroyo owns:
#=>   Annabelle the Dachsund

```

### Bonus

Allow the puppies to have multiple owners, and make sure that
when you print the puppies you list each of their owners!
