puts '!'

choice =''

until choice == 'a' || choice == 'b' || choice == 'c'
print 'Enter a, b, or c: '
choice = gets.chomp
if choice == 'a'
  puts 'a is for apple, you pleb'
elsif choice == 'b'
  puts 'b is for banana, you pleb'
elsif choice == 'c'
  puts 'c is for cantaloupe, you pleb'
else puts 'youre a rebel, but i like it'
end
end


