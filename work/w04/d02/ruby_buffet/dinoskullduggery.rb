 hammonds_mines = {
  :working => [
    {
      :location      => "Mongolia",
      :depth         => "150 meters",
      :annual_budget => 850_000,
      :specimens => [
        "Brachiosaurus",
        "Triceratops",
        "Gallimimus",
        "Compsognathus"
      ]
    },
    {
      :location      => "Nicaragua",
      :depth         => "200 meters",
      :annual_budget => 1_500_000,
      :specimens => [
        "Tyrannosaurus Rex",
        "Stegosaurous",
        "Triceratops"
      ]
    },
    {
      :location      => "Patagonia",
      :depth         => "400 meters",
      :annual_budget => 1_200_000,
      :specimens => [
        "Dilophosaurus",
        "Brachiosaurus",
        "Triceratops",
        "Velociraptor"
      ]
    },
    {
      :location      => "Mexico",
      :depth         => "350 meters",
      :annual_budget => 900_000,
      :specimens => [
        "Stegosaurous",
        "Gallimimus",
        "Parasaurolophus"
      ]
    }
  ],
  :planned => [
    "China",
    "Nicaragua 2"
  ]
}

puts "data structure of hammonds_mines is #{hammonds_mines.class}"

puts "working mines: #{hammonds_mines[:working].length}"

if hammonds_mines[:working][3][:depth].to_i > 200
  puts "the mexico mine of depth #{hammonds_mines[:working][3][:depth].to_i} is over the limit"
else
  puts "it's not"
end

puts "if there were 50 workers at patagonia, with a budget of #{hammonds_mines[:working][2][:annual_budget].to_i
} dollars, the maximum paid would be #{(hammonds_mines[:working][2][:annual_budget].to_i) / 50} dollars"

puts "you've got #{hammonds_mines[:planned][1].split[1].to_i} dinosaurs in #{hammonds_mines[:planned][1].split[0]}"

hammonds_mines[:working].each do |place|
  if place[:specimens].include?("Stegosaurous")
     puts "A stegosaurus was found in #{place[:location]}"
  end
end


# Exercise 2

# The budget must be cut! Write a method (low_budget_mines)
# hat returns an array of only the mines with a budget at
# or below 1_000_000.
def low_budget_mines (wat)
  @arr = Array.new
  wat.each do |this|
    if this[:annual_budget].to_i < 1000000
      @arr.push(this[:location])
    end
  end
end

low_budget_mines(hammonds_mines[:working])


# Write a method (high_yield_mines) that returns an array
# only of the mines that have 4 or more specimens.

def high_yield_mines (a)
  @arr2 = Array.new
  a.each do |this|
    if this[:specimens].length >= 4
      @arr2.push(this[:location])
    end
  end
end

high_yield_mines(hammonds_mines[:working])


# Write a method (mine_analysis) that it returns a hash of
# each mine's location and it's budget per specimen,
#  like this:
# {
#   :location => "...",
#   :budget_per_specimen => 0.0
# }

def mine_analysis (a)
  @analysis_hash = Hash.new
end



# Write a method (best_mines) that sorts an array of mines
#  of the type above based on their "mine analysis,"
#   from lowest budget per specimen to highest!




