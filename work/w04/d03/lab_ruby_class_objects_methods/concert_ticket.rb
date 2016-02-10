class ConcertTicket
  attr_reader :seat, :row, :type, :showtime, :artist

  def initialize (seat, row, type, showtime, artist)
    @seat = seat
    @row = row
    @type = type
    @showtime = showtime
    @artist = artist
  end

end
