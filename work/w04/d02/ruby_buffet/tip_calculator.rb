# Part A: Tip Calculator

# File name: tip_calculator.rb

# Write a program that:

# Prints to Standard Output to ask how much a meal cost (in dollars).
# Reads from Standard Input the total price of the meal.
# Prints to Standard Output to ask how much to tip (between 0 and 100 percent).
# Reads from Standard Input the size of the tip.
# Prints to Standard Output the amount of the tip (in dollars).

puts "how much was it in dollars?"

meal = gets.chomp

meal = meal.to_f

puts " meal was " + meal.to_s

puts meal.class

puts "how much tip between 0 and 100?"

tip = gets.chomp

tip = tip.to_f

puts "tip entered: " + tip.to_s

puts tip.class


# Part C: Methods

# Now, make sure that the logic for both of these programs is encapsulated
#  in methods! Name the two methods:

# calculate_tip
# calculate_bmi
# Make sure that they take arguments as input, and return some output.
# Within the methods do not use puts or gets! However, plug the methods
#   back in to the programs so that the program uses the methods, gets user input,
#    and prints data back to the user.

def calculate_tip (tip, meal)

  convertedtip = meal.to_f * (tip.to_f / 100)

  puts "tip for this meal: #{convertedtip}"
end

calculate_tip(tip, meal)
