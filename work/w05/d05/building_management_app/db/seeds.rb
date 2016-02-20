# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
apartments = Apartment.destroy_all
buildings = Building.destroy_all

wilshire = Building.create(
  location: "Mid-Wilshire",
  num_units: 120,
  has_parking: false,
  has_elevator: false
)

palisades_plaza = Building.create(
  has_elevator: true,
  has_parking: true,
  num_units: 10,
  location: "Pacific Palisades"
)

wilshire.apartments.create(
 square_footage: 2000,
 num_beds: 3,
 floor: "10",
 price: 1200
)
wilshire.apartments.create(
  square_footage: 2000,
  num_beds: 3,
  floor: "9",
  price: 1200
)

palisades_plaza.apartments.create(
 square_footage: 500,
 num_beds: 1,
 floor: "Le Premier Etage",
 price: 2500
)










