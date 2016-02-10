puts "beep beep boo bop muthafucka"
puts "I calculate your stuff bruh"

query = ''

until query == "q" do
  puts "tell me what you need my jigguh ('+', '-', '*', '/'"
  query = gets.chomp
  if query == "q"
    puts "fine bro"
  elsif query == "-"
    puts "first"
    first = Integer(gets)
    puts "second"
    second = Integer(gets)
    answer = first - second
    puts "the answer to #{first} - #{second} is #{answer}"
  elsif query == "*"
    puts "first"
    first = Integer(gets)
    puts "second"
    second = Integer(gets)
    answer = first * second
    puts "the answer to #{first} * #{second} is #{answer}"
  elsif query == "/"
    puts "first"
    first = Integer(gets)
    puts "second"
    second = Integer(gets)
    answer = first / second
    puts "the answer to #{first} / #{second} is #{answer}"
  elsif query == "+"
    puts "first"
    first = Integer(gets)
    puts "second"
    second = Integer(gets)
    answer = first + second
    puts "the answer to #{first} + #{second} is #{answer}"
  else
    puts "jigga are you fricking retarded?"
  end
end
