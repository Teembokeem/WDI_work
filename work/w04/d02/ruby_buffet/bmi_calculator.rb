
# Part B: Body Mass Index (BMI)

# File name: bmi_calculator.rb

# Write a program that:

# Prints to Standard Output to ask what your weight is in pounds.
# Reads from Standard Input your weight in pounds.
# Prints to Standard Output to ask what your height is in inches.
# Reads from Standard Input your height in inches.
# Runs the height and weight information through the BMI algorithm:
# Step 1: Multiply your weight in pounds by 703.
# Step 2: Multiply your height in inches by itself (ie, square it).
# Step 3: Divide the figure from Step 1 by the figure in Step 2.
# Prints to Standard Output your BMI (rounded to the nearest integer)!


puts "whats your weight in pounds?"

weight = Integer(gets)

puts "whats your height in inches?"

height = Integer(gets)

bmi = (weight * 703) / (height * height)

puts bmi


# Part C: Methods

# Now, make sure that the logic for both of these programs is encapsulated
#  in methods! Name the two methods:

# calculate_tip
# calculate_bmi
# Make sure that they take arguments as input, and return some output.
# Within the methods do not use puts or gets! However, plug the methods
#   back in to the programs so that the program uses the methods, gets user input,
#    and prints data back to the user.


def calculate_bmi (weight, height)

  bmi = (weight * 703) / (height * height)
  puts "your bmi is  #{bmi}"
end

calculate_bmi(weight, height)
