class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :address
      t.integer :bedrooms
      t.float :baths
      t.integer :price

      t.timestamps null: false
    end
  end
end
