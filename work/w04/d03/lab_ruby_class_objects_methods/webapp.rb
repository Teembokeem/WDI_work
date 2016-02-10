class WebAppUser
  attr_reader :username, :password, :name, :birthday, :gender
  attr_writer :username, :password, :name, :birthday, :gender

  def initialize (a,b,c,d,e)
    @username = a
    @password = b
    @name = c
    @birthday = d
    @gender = e
  end

  def authenticate (a)
    if a == :password
      puts "YOUGOT IN"
    else
      puts "fucking imposter"
    end
  end
end
