class MusicLibrary
  attr_accessor :allsongs

  def initialize()
    @allsongs = Array.new
  end
  def addsong(songtitle)
    songtitle = Hash.new
    songtitle[:song] = songtitle
    puts "song length?"
    b = gets.chomp
    songtitle[:songlength] = b
    puts "artist"
    c = gets.chomp
    songtitle[:artist] = c
    puts "genre"
    d = gets.chomp
    songtitle[ :genre] = d
    puts "lyrics"
    e = gets.chomp
    songtitle[:lyrics] = e
    @allsongs.push(songtitle)
  end

end

YaelsShittyLibrary = MusicLibrary.new


YaelsShittyLibrary.addsong("A_thousand_miles")

puts YaelsShittyLibrary.allsongs


