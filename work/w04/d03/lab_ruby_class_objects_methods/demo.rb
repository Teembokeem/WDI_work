require_relative "hand_cream.rb"
require_relative "concert_ticket.rb"
require_relative "webapp.rb"
require_relative "personal_music_library.rb"

health_and_beauty_cream = HandCream.new "white and blue", "creamy", "natural"

puts "our hand cream color is #{health_and_beauty_cream.color},
 texture is #{health_and_beauty_cream.texture},
 and its #{health_and_beauty_cream.ingredients} baby."

concertticket = ConcertTicket.new "2", "b", "vip", "10:00PM", "Michael Jackson"

puts "your seat is #{concertticket.seat}. Your row is #{concertticket.row}. Ticket type is #{concertticket.type}
 Show starts at: #{concertticket.showtime}. Enjoy watching #{concertticket.artist}"

yaelDoe = WebAppUser.new "AngelYaelxxoo", "Ilovejustinbieber", "Yael", "nov 13, 1992", "trans"
timDoe = WebAppUser.new "Timdoe", "Ilovegayshit", "timmy", "april 9, 1990", "rabbit"

puts "yael's user is  #{yaelDoe.username}, but tim's user is #{timDoe.username}"

yaelDoe.authenticate("fuck")

YaelsShittyLibrary = MusicLibrary.new "Skaterboi", "3 minutes and a second", "Avril Lavigne", "Rockpop", true

puts YaelsShittyLibrary.song
puts YaelsShittyLibrary.song_length
puts YaelsShittyLibrary.artist
puts YaelsShittyLibrary.genre
puts YaelsShittyLibrary.lyrics

YaelsShittyLibrary.song = "What do you mean?"

puts "yael finally got good taste. her new favorite song is #{YaelsShittyLibrary.song}"

puts YaelsShittyLibrary.song

YaelsShittyLibrary.addsong

puts YaelsShittyLibrary.newsong


