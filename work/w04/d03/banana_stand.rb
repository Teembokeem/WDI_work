class BananaStand
  attr_accessor :color, :year_opened, :manager, :yelpRating

  def initialize(color, year_opened, manager, yelpRating)
    @color = color
    @year_opened = year_opened
    @manager = manager
    @yelpRating = yelpRating
    @@material = "wood"
  end

  def material
    @@material
  end

end
my_stand = BananaStand.new("yellow", "1985", "George Michael", "meh")
puts my_stand
puts my_stand.manager
puts my_stand.color
puts my_stand.year_opened
puts my_stand.yelpRating

my_stand.manager = "Gorilla George"
my_stand.color = "mustard yellow"
my_stand.year_opened = "2023"

puts "he got fired... now its #{my_stand.manager}"
puts "we painted it over with #{my_stand.color} so we could be hipster"
puts "oh and...we opened in #{my_stand.year_opened} meaning we ahead of the game doe."
puts my_stand.material
