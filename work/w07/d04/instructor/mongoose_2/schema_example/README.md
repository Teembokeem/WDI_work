# Tween Charm Bracelet

> I'm basically a grown-up, and I have an appreciation for fine things.
> Have you seen my charm bracelet?

![](http://www.ourkidsmom.com/wp-content/uploads/2012/07/IMG_6056.jpg)

As we all know, tween-hood is a magical time. The only problem is that
they can be a little picky! Let's make a database to help my niece
Sophia keep track of her charms.

Let's create a file: `charms_seeds.js`, that will define the schema
for a charm, and load new charm "documents" on to the "bracelet" 
(`charms` collection).

The schema should include path/attributes for:

- `purchaser`
- `theme` (the name or icon of the charm)
- `material`
- `cost`
- `description` (extra information about the charm)

Let's begin with the following charms:

1. *A nickel-plated tennis racket from Mom.*
2. *A ceramic bear Sophia bought for $15 on a trip to the San Diego Zoo.*
3. *A nickel-plated cross from Grammy.*
4. *A wooden tennis racket from Uncle Colin.*
5. *A silver cross from Grammy with a heart she bought when the Pope visited.*
6. *A shell that Sophia found and glued to a clasp during a Scout trip. 
   The clasp cost $1.*

### Defaults & Requireds

Now, let's implement defaults to round out our data, and enforce 
required data. Test that these work!

1. Cost should default to 0 if not given.
2. The theme should default to "Life Experience" if there is none given.
3. Purchaser and material are required.

### Validations

Finally let's write some validations, since Sophia is starting to assert
herself. I mean, she want's her charm bracelet to represent who she is,
right?

1. No more charms from Mom!
2. Only charms that are made of silver, gold, ceramic, or shell allowed.
3. Any charms worth less than $10 or more than $50 are not allowed.
4. If a charm is a cross, it can only come from Grammy.
5. If a charm's theme is "Life Experience," then there *must* be a 
   description.

