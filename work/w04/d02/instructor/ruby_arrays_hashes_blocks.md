
# Dream's Ruby
![Doctor Destiny](http://farm4.static.flickr.com/3596/3372068019_4c52bb8e02.jpg)

## Arrays, Hashes, & Blocks

| Learning Objectives |
| :--- |
| Use basic array methods including count, first, and last |
| Iterate through arrays with each method |
| Use the appropriate data collection for a situation: hash vs. array |
| Get and set values for specific hash key |
| Get a list of all keys in a hash |

#### Road Map
1. Intro - You've Found the Dreamstone!
2. Working with Arrays - Everything We've Dreamed Of
3. Independent Practice - DREAM THEME
4. Working with Hashes - Defining Our Reveries
5. Independent Practice - Hash Out Your Dream
6. Conclusion


## Intro - You've Found the Dreamstone!
![Dreamstone](http://4.bp.blogspot.com/-xBRVl1u5nB4/T4p8gW1qjGI/AAAAAAAAAEk/UBiKTRslQ7g/s1600/Dreamstone2.jpg)

Doctor Desitny's Materioptikon has been recircuited, and we're lucky enough to 
be holding the dang thing! We now have the power to access and realize the 
dreams of others with Ruby!

You'll be using arrays & hashes all the time in your time as a developer, so 
it's important to know how to manipulate complex data types.

For these Ruby data collections, you'll be reminded of similar ideas in JS. 
That's fantastic. 

Anytime you can draw on that connection to help yourself guess at what methods 
might exist, or even just what to Google, you'll be in good shape.

## Working with Arrays - Everything We've Dreamed Of

Just as a refresher – what are arrays for? What do they do? 

**They're for holding a collection of values**, that's it.

#### Do Android's Dream of Electric Sheep?

I have no idea, but we can imagine counting sheep on our computers.

We make arrays in Ruby the same as we did in JS. Nothing unexpected here.

```ruby
sheep = [1,2,3,4] # I'm obviously an array of sheep
```

Then, once you've created an array, how do you imagine you add to an array?

```ruby
sheep.push 5 # I would never actually push a sheep
# => [1,2,3,4,5]
```

Similarly, we've can "shovel" a value into the array.

```ruby
sheep << "An 80's Haircut" # dreams, man
# => [1,2,3,4,5,"An 80's Haircut"]
```

#### Removing From Arrays

As we see, it's possible to mix data types (Ruby does not care), but why would 
we want to? 

You wouldn't want to wear a sweater vest of "An 80's Haircut" wool, right?

So let's delete that from our array of dreamt sheep.

```ruby
sheep.delete "An 80's Haircut" # give it the value you want to get rid of
# => [1,2,3,4,5]
```

#### Useful Array Methods - Your JS Dreams, a Ruby Reality

There are so many great array methods - here are a few you'll probably use 
often.

```ruby
# how many sheep are there?
sheep.length # => 5, of course

# also introducing
sheep.count # => 5, as well!

# just as you'd expect, get's the value at nth index
# remember, and indexes start at 0!
sheep[3] # => 4

# a handy method equivalent to sheep[0]
sheep.first
# also a handy method equivalent to sheep[numbers.length-1]
sheep.last

# and what if disorder put us to sleep?
sheep = [3,2,4,1,5]

# But we'll need to wake up!
sheep.sort # [1,2,3,4,5]
sheep.sort.reverse # => [5, 4, 3, 2, 1]
```

#### Iteration you've been dreaming of

Now the good stuff – looping through our array and doing something with each 
value.

Remember how convoluted iterating was in JS? `for` loops? Not in my dreams!!

We can do for loops in Ruby, too, but we've got something _much_ nicer:

```ruby
sheep.each do |number|
  puts "i am sheep #{number}"
end

# i am sheep 1
# i am sheep 2
# i am sheep 3
# i am sheep 4
# i am sheep 5

```

In fact, many methods can iterate:

```ruby
sheep.count do |number|
	if number < 4
		puts "#{number} sheep"
	else 
		puts "zzzzz"
	end
end
```

To find more useful array methods, you'll have to look in the [Ruby Docs](http://ruby-doc.org/core-2.2.0/Array.html)!

## Block the Bad Dreams with Blocks!!

<img src="http://4.bp.blogspot.com/-16oiAO4qwj8/VIK4PXSxCOI/AAAAAAAAAr4/w9pwDqH-g2c/s1600/aaaaSandman.jpg" height=300px>

That `do`/`end` thing you're messing with is called a _block_, and it just 
runs the code in between, almost like a little function without a name - like 
anonymous functions in JavaScript or lambdas in Python.

You'll see blocks all the time, and you'll use `.each` like it's your job 
(because it will be). It just loops through each value in your array and 
assigns a local variable (that you decide) to each object. You come up 
with what you want it called in the "pipes", aka those tall neighbors 
surrounding the variable: 

`|a_variable_of_my_choosing|`

Think of these pipes as little slides that send the variable directly into 
your block. 

To make it super clear: if `sheep` is a variable holding `[1,2,3,4,5]`, then 
`sheep.each` will go through each number and do _something_ to each variable. 
It's sort of as if the code is doing this:

```ruby
# sheep.each do |number|
#   puts "i am sheep #{number}"
# end

number = 1
puts "i am sheep #{number}"

number = 2
puts "i am sheep #{number}"

number = 3
puts "i am sheep #{number}"

number = 4
puts "i am sheep #{number}"

number = 5
puts "i am number #{number}"
```

For best practice, always name your `|a_variable_of_my_choosing|` something 
obvious. In fact, best practice is to use the singular tense of the array 
you're iterating over: 

```ruby
dreams.each do |dream|
``` 

or 

```ruby
insane_clown_possee.each do |insane_clown|
```

Of course, the beauty of loops is that we don't have to write all that out.

And a bonus tip: `do`/`end` is functionally the same as `{`/`}`, so you'll see 
both. Conventionally the curly braces are for when you want to keep it on one 
line, but it does not matter.

```ruby
# totally the same
sheep.each do |shep|
  puts "i am sheep #{shep}"
end

# totally the same
sheep.each {|shep| puts "i am sheep #{shep}"}
```

#### Methods - Recurring Dreams

We'll have an entire lesson on this later, but let's learn basic syntax in Ruby 
methods.

Much like Javascript functions, we can name our blocks as methods! Unlike JS,
we use the `def` keyword to _define_ methods in Ruby, and `end` to close our
block.

```ruby
def go_to_sleep sheep
	sheep.count do |number|
		if number < 4
			puts "#{number} sheep"
		else 
			puts "zzzzz"
		end
	end
end

# To call the method:
go_to_sleep sheep
```

Again, recall that parentheses are optional. We can now access `go_to_sleep` later
in our program and pass any array!

```ruby
goats = [1,2,3,4,5]

go_to_sleep goats

# Will Print:
# "1 sheep"
# "2 sheep"
# "3 sheep"
# "zzzzz"
# "zzzzz"
```


## Independent Practice - DREAM THEME!

Choose your dream themes for your slumber!

```ruby
dreams = ['scary', 'funny', 'woah', 'heavy', 'anxious', 'super-powered']
```

- Given the following list of dreams, **iterate over them**, **prepending** 
  "actually " if their name includes an "s" in it. Make a new array if you 
  need to.
- Then, **sort the dreams** so that "actually" dreams come first
- Next, **select just the dreams with "actually"** in their names. Look it up 
  in the [Ruby Docs](http://ruby-doc.org/core-2.2.0/Array.html) if you need to.
- Finally, **count how many "actually" dreams** you have!


## Working with Hashes - Defining Our Reveries
<img src="http://a4.files.psmag.com/image/upload/c_fit,cs_srgb,w_940/MTMxNDk3MTU1MDU0NTg1ODY2.png" height=350px>

We use hashes constantly. Hashes, like JS objects, are a great way to store 
related data of all different kinds, in a way that's super readable.

The key to hashes is that they always house key:value pairs. **The key 
describes the properties, the value is the information relating to or 
describing the property.**

#### Creating a Hash

To see it in action, let's pick something random in the room and try to 
describe it.

> **Note:** just to prove hashes can hold all kinds of great data, let's see 
> how many different data types we can describe our object with!

For example, let's describe a dream I had last night.

```ruby
dream = {
  type: 'super-powered',
  friends: ["Superman", "Agent 355", "Vin Deisel"],
  monster_trucks: 7,
  pants_on: true,
  setting: {
    environment: "deciduous",
    music: 'Jimmy Buffet'
  }
}
```

Nice! Good work.

Now, based on what you know about how JS objects work, how would you guess we 
grab data out of here? Let's say we want to know how many `monster_trucks` 
were present.

```ruby
dream[:monster_trucks] # => 7
```

#### Symbols Are For Memory

> _"Hold up, what's the colon? In JavaScript, we'd use 
>  ``dream['monster_trucks']``. Is my life a lie?"_ - Roughly 
>  half the classroom, in their brains.

In Ruby, keys, like those up above, are symbols, not strings.

Symbols are basically just like strings, except they save computer memory. 
Every string you create is unique and takes up space on your computer, even if 
they're the same value! When we're busy looking up key/value pairs, we don't 
want to be wasting memory - we want it to be fast!

Let's watch:

```ruby
"Your Name".object_id
#=> a number

"Your Name".object_id
#=> a different number

:your_name.object_id
#=> a number

:your_name.object_id
#=> the same number!
```

Symbols on their own don't do much, but they work great as keys. There are two 
ways to write them:

```ruby
{
  # from older ruby versions, still totally work
  :the_old_way => 'some value',

  # from newer ruby versions, which is just shorter
  the_new_way: 'some value'
}
```

Either are fine; you'll see both a lot. Some prefer the "hash rocket" because 
it reminds them they are programming in Ruby (and it sounds cool). Others 
prefer the cleanliness of the colon.

For the record, strings as keys are _possible_ – we just try not to use them.

#### Adding to our hash

Real quick – what if we forgot a key/value pair, or want to add one in after the fact?

```ruby
dream[:my_power] = 'righteous high-five'

# dream = {
#   type: 'super-powered',
#   friends: ["Superman", "The Big Fundamental", "Sonic the Hedgehog"],
#   monster_trucks: 7,
#   pants_on: true,
#   setting: {
#     environment: "deciduous",
#     music: 'Jimmy Buffet'
#   },
#   my_power: 'righteous high-five'
# }
```

#### Come to Think of It, I Wasn't Wearing Pants...

How do you think we'd remove a key:value pair?

Given we just learned to do this with arrays, it's okay to be unsurprised.

```ruby
dream.delete :pants_on
# remember, parentheses are optional!
```

## Independent Practice - Hash Out Your Dream
<img src="http://i.imgur.com/IBYndHD.jpg" height=300px>

Now you try it!

- Partner up! Together and **by hand with markers on the desk**, describe a 
  dream as a hash. Use any data types you can think of, because hash values can be anything!
- When you're done, each of you, independently **open your computer, and write 
  it out in Pry**. Try   getting each key out, adding in new ones, and 
  deleting ones just for fun.
- In your hashes, try to:
  - Include one key value with the value as an array 
  - Include one key value with the value as another hash (look to the fan hash from earlier!)

## Conclusion

- How do you get the 4th item of an array?
- How do you get a value out of a hash?
- How do you add a value to a hash? What about an array?