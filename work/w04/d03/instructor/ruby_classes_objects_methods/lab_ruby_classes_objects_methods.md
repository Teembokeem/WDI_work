![](http://files.meetup.com/1611353/ruby-logo-crop.png)

# Lab - Ruby Classes, Objects & Methods

## Introduction

### Pair Programming Exercise

- This will be a pair programming exercise, which means you'll be paired up with the person sitting next to you, and only **one** of you can have your computer open at a time.

- Whoever has the keyboard is driving and will type code, the other pair is the navigator who will give guidance. You both will work together to creatively solve the problem, so you're equally able to come up with solutions – as long as you both communicate.

- To make it more challenging, every ten minutes, you'll have to switch drivers. There will be a timer.

- Pair programming can be fun and enlightening, however, it can also be frustrating at times and learning to deal with this frustration is learning to deal with the reality of many developer gigs.

### Designing Classes

- Your task for this lab is to create from scratch, four Ruby classes with methods & attributes.

- Keep in mind that methods can be getters, setters, or perform actions that an instance of the class should be able to do. Methods can invoke other methods. They can change instance attributes and return data as necessary.

- Try to really analyze how an object would look, feel, smell, sound, and behave. Think about how the object might interact with other objects within the context of an application you might develop.

- After the the time allotted for designing the classes is up, volunteers will demo one of their class designs. To demo your classes, create a separate `demo.rb` file that:
	- Uses the `require_relative` method to load your class definition files.
	- Creates an instance of the class(es) with or without arguments, depending upon the design of the class.
	- Calls the methods on the object instance.

## Exercise

### Requirements

Your team will create 4 objects from scratch, with appropriate methods & attributes.

Everyone will be designing the same object assignment one at a time. You'll have exactly 10 minutes to work on each class. A timer will be set to you know when to start working on the next class.

You will model the following objects:

1. Create a class that represents something in this room.

2. Create a class that represents a concert ticket.

3. Create a class that represents the user of a web application.

4. Create a class that represents a personal music library.

### Hint

Due to the fact that you have only 10 minutes to work on each class, be sure to layout the class' attributes and methods first.

This exercise is about designing a classes attributes and methods. Feel free to use the `attr_*` methods to provide access to the attributes. Your other methods should at least `puts` something out to the terminal, but feel free to implement logic as time permits.

### Deliverables

- 4 Ruby files, named appropriately for each of the classes you're creating.

## Additional Resources

- [Ruby Documentation](https://www.ruby-lang.org/en/documentation/)

- [Ruby Styleguide](https://github.com/bbatsov/ruby-style-guide)

- [Programming Ruby - The Pragmatic Programmer's Guide](http://phrogz.net/programmingruby/tut_classes.html)