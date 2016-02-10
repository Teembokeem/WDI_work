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
