#######################
# METHODS
#######################

################ CALCULATORS

# puts "How much did your meal cost?"
# price = gets.chomp.to_f
# puts "How much do you want to tip (%)?"
# percent = gets.chomp.to_f
# puts "You should tip $#{sprintf "%.2f", (price * percent/100)}"

# puts "What is your weight in pounds?"
# weight = gets.chomp.to_f
# puts "What is your height in inches?"
# height = gets.chomp.to_f
# puts "You have a BMI of #{((weight * 703)/(height ** 2)).to_i}."

# def calculate_tip(price, percent)
#   sprintf "%.2f", (price * percent/100)
# end

# def calculate_bmi(weight, height)
#   ((weight * 703)/(height ** 2)).to_i
# end

# puts "How much did your meal cost?"
# price = gets.chomp.to_f
# puts "How much do you want to tip (%)?"
# percent = gets.chomp.to_f
# puts "You should tip $#{ calculate_tip price, percent }"

# puts "What is your weight in pounds?"
# weight = gets.chomp.to_f
# puts "What is your height in inches?"
# height = gets.chomp.to_f
# puts "You have a BMI of #{ calculate_bmi weight, height }"

################ ROAD MUSIC

# def times_album_plays_in_full(album_length, distance, average_speed)
#   seconds_driven = (distance / average_speed) * 60**2
#   seconds_driven / length_in_seconds(album_length)
# end

# def length_in_seconds(album_length)
#   album_length[:seconds] + album_length[:minutes] * 60 + album_length[:hours] * 60**2
# end

# album_length = {}

# puts  "How long was the album? …"
# print "In hours:   "
# album_length[:hours]   = gets.chomp.to_i
# print "In minutes: "
# album_length[:minutes] = gets.chomp.to_i
# print "In seconds: "
# album_length[:seconds] = gets.chomp.to_i

# puts "How long is the drive in miles?"
# distance      = gets.chomp.to_i
# puts "What is the average speed in miles per hour?"
# average_speed = gets.chomp.to_i

# times = times_album_plays_in_full album_length, distance, average_speed
# puts "You could listen to this album #{ times } times in full!"

################ OPEC

# def drive_cost(cost_of_gas, miles_per_gallon, distance)
#   (distance.to_f / miles_per_gallon) * cost_of_gas
# end

# puts "Driving around the world would cost $#{ sprintf "%.2f", drive_cost(2.781, 32.4, 24_902) }"

################ GEORGE JETSON

# def meters_to_miles(meters)
#   meters * 0.000621371
# end

# def drive_time(miles_per_hour, distance)
#   distance.to_f / miles_per_hour
# end

# hours = drive_time 55, meters_to_miles(149_597_871_700)
# puts "Driving in to the sun would take #{ ((hours / 24) / 365).round } years."

################ SPACE ODDITY

# It's more of a thought experiment…

#######################
# COLLECTIONS
#######################

# hammonds_mines.class
# => Hash
# hammonds_mines[:working].length
# => 4
# hammonds_mines[:planned].length
# => 2
# hammonds_mines[:working][3][:depth]
# => "350 meters"
# hammonds_mines[:working][3][:depth].class
# => String
# hammonds_mines[:working][3][:depth].to_i < 200
# => false
# hammonds_mines[:working][2][:annual_budget]
# => 1200000
# hammonds_mines[:working][2][:annual_budget] / 12 / 50
# => 2000
# hammonds_mines[:working][1][:specimens]
# => ["Tyrannosaurus Rex", "Stegosaurus", "Triceratops"]
# hammonds_mines[:working][1][:specimens][1]
# => "Stegosaurus"
# hammonds_mines[:working][3][:specimens][0]
# => "Stegosaurus"

# def low_budget_mines(mines)
#   low_budget_mines = []
#   mines.each do |mine|
#     low_budget_mines.push mine[:location] if mine[:annual_budget] < 1_000_000
#   end
#   low_budget_mines
# end
# puts low_budget_mines(hammonds_mines[:working])

# def high_yield_mines(mines)
#   high_yield_mines = []
#   mines.each do |mine|
#     high_yield_mines.push mine[:location] if mine[:specimens].length >= 4
#   end
#   high_yield_mines
# end
# puts high_yield_mines(hammonds_mines[:working])

# def mine_analysis(mines)
#   output_mines = []
#   mines.each do |mine|
#     output_mines.push({
#       location: mine[:location],
#       budget_per_specimen: mine[:annual_budget] / mine[:specimens].length
#     })
#   end
#   output_mines
# end
# puts mine_analysis(hammonds_mines[:working])

# def best_mines(mines)
#   mine_analysis(mines).sort_by {|mine| mine[:budget_per_specimen]}
# end
# puts best_mines(hammonds_mines[:working])

# def clean_house(mines)
#   mines.delete_if {|mine| mine[:location] == "Nicaragua"}
# end
# clean_house hammonds_mines[:working]
# puts hammonds_mines

# def clean_house(mines)
#   mines[:working].delete_if {|mine| mine[:location] == "Nicaragua"}
#   mines[:defunct] = ["Nicaragua"]
# end
# clean_house hammonds_mines
# puts hammonds_mines

# hammonds_mines[:planned].pop
# hammonds_mines[:working].push({
#   location:      "Nicaragua 2",
#   depth:         "50 meters",
#   annual_budget: 100_000,
#   specimens:     []
# })

# puts
# puts "Working mines:"
# hammonds_mines[:working].each_with_index do |mine, i|
#   puts "  #{ i + 1 }. #{ mine[:location] }"
# end
# puts "Which mine do you want to use?"
# location = gets.chomp.to_i - 1

# hammonds_mines[:working][location][:specimens].each do |specimen|
#   puts "There is now a #{ specimen }, with a dash of hermaphroditic frog DNA."
# end

#######################
# CONTROL FLOW
#######################

# TBD… Sorry! –PJH
