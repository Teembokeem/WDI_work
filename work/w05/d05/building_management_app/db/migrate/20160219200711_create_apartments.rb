class CreateApartments < ActiveRecord::Migration
  def change
    create_table :apartments do |t|
      t.integer :square_footage
      t.integer :num_beds
      t.boolean :is_available
      t.string :floor
      t.boolean :is_allowed_pets
      t.decimal :price
      t.float :num_baths
      t.integer :num_occupants
      t.string :leaseholder
      t.integer :building_id

      t.timestamps null: false
    end
  end
end
