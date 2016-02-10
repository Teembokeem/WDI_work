puts "whats the gas cost?"
gas = Float(gets)
puts "whats the mpg?"
mpg = Float(gets)
puts "whats the distance?"
distance = Float(gets)



def drive_cost(gascost, mpg, distance)
  puts "it would cost  #{distance / mpg * gascost}"
end

drive_cost(gas, mpg, distance)
