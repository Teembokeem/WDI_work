# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
hypes = Hype.destroy_all
hypes = Hype.create([
    {msg: "Jumpman", user: "KeithTo" },
    {msg: "@KeithTo lol.", user: "YaelA"},
    {msg: "I want to feed Momo :(", user: "JStretch"},
    {msg: "@JStretch damnit why you gotta use Stretch....", user: "JSquish"}
  ])
