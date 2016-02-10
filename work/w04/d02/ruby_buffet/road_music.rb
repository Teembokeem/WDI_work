#  Write a method named times_album_plays_in_full
#  to calculate the following problem. Then, as in
#   the above exercise, write a program to get user
#   input and print data back to the user.

#  The total running time of the Beatles White Album is
# 1 hour 33 minutes 35 seconds. It's 3,187.1 miles from
# Portland, Maine to Portland Oregon via I-80 E and I-90 E.
#  If you drove from Portland to Portland at an average rate
#  of 55 miles per hour, how many times could you listen to
#  the White Album in full?
#  Hint: the method should take an album length in hours,
# minutes and seconds; a driving distance in miles,
#  and an average speed in miles per hour.
#  Feel free to write more methods to calculate sub-problems
#  within the larger problem, like breaking down time units
#   into seconds!

puts "hours of your album?"
hours = Float(gets)
puts "minutes of your album?"
minutes = Float(gets.to_f / 60)
puts "seconds?"
seconds = Float(gets.to_f / 3600)

def runningtime (a,b,c)
  hoursratio = Float(a + b + c)
end


puts "how long is the drive?"

drive = Float(gets)

puts "drive was #{drive}"

puts "how fast?"

speed = Float(gets)

puts "speed was #{speed}"

def times (a,b,c)
  calc = (b / c) / a
  puts calc
end


times(runningtime(hours, minutes, seconds), drive, speed)
