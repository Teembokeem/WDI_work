
  puts "Welcome you plebian."
  puts "It's Ric Rac Roe, yes I have a speech impediment."

  @win = false
  @player = {:turn => "X", :value => 1}
  @computerface = {:tongue => "_"}
  @totalmoves = 0
  @board = Array.new
  @board[0] = {:location => "a1", :view => "?", :value => 0}
  @board[1] = {:location => "a2", :view => "?", :value => 0}
  @board[2] = {:location => "a3", :view => "?", :value => 0}
  @board[3] = {:location => "b1", :view => "?", :value => 0}
  @board[4] = {:location => "b2", :view => "?", :value => 0}
  @board[5] = {:location => "b3", :view => "?", :value => 0}
  @board[6] = {:location => "c1", :view => "?", :value => 0}
  @board[7] = {:location => "c2", :view => "?", :value => 0}
  @board[8] = {:location => "c3", :view => "?", :value => 0}


  def gameboard
    puts"   RIC-RAC-ROE     ,-----,,___,   "
    puts"                   |^   ^|| #{@player[:turn]} |"
    puts"    A   B   C      |__#{@computerface[:tongue]}__||___|   "
    puts"                    ,' ',   |     "
    puts"1)  #{@board[0][:view]} | #{@board[3][:view]} | #{@board[6][:view]}    O==|   |===D     "
    puts"   ------------     |   |         "
    puts"2)  #{@board[1][:view]} | #{@board[4][:view]} | #{@board[7][:view]}       |   |         "
    puts"   ------------     |```|         "
    puts"3)  #{@board[2][:view]} | #{@board[5][:view]} | #{@board[8][:view]}       |   |         "
    puts" "
  end


  def move
    gameboard
    puts "It's player #{@player[:turn]}'s turn!"
    puts "which column? A, B, or C?"
    column = gets.chomp.downcase
    puts "you chose column #{column}"
    puts "which row? 1, 2, or 3?"
    row = gets.chomp
    puts "you chose row #{row}"
    move = column + row
    @board.each do |this|
      if this[:location].include?move
        if this[:view] == "?"
          this[:view] = @player[:turn]
          this[:value] = @player[:value]
          @totalmoves += 1
          puts "secured move #{@player[:turn]} on #{move}. On board: #{this[:location]}, player: #{this[:view]}, value of: #{this[:value]}"
        else
          puts "the heck bro"
          startGame
          break
        end
      end
    end
  end

  def checkWin (a,b,c)
      unless @win == true
        if @board[a][:value] + @board[b][:value] + @board[c][:value] == 3
          puts "you win!"
          @win = true
          gameboard
        end
      end
  end

  def checkTie
    if @totalmoves == 9
      @win = true
      puts" "
      gameboard
      puts " "
      puts " its a tie suckas"
    end
  end

  def switchPlayer
    unless @win == true
      puts " "
      puts "switching players!"
      puts " "
      if (@player[:turn] == "X")
        @player[:turn] = "O"
        @player[:value] = -1
        @computerface[:tongue] = "u"
        startGame
      elsif (@player[:turn] == "O")
        @player[:turn] = "X"
        @player[:value] = 1
        @computerface[:tongue] = "_"
        startGame
      end
    end
  end

  # def gameWin
  #   if

  def startGame
    move
    checkWin(0,1,2)
    checkWin(3,4,5)
    checkWin(6,7,8)
    checkWin(0,3,6)
    checkWin(1,4,7)
    checkWin(2,5,8)
    checkWin(0,4,8)
    checkWin(6,4,2)
    checkTie
    switchPlayer
  end

startGame




