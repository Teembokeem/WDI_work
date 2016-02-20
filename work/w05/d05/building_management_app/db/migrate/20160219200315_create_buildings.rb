class CreateBuildings < ActiveRecord::Migration
  def change
    create_table :buildings do |t|
      t.string :location
      t.integer :num_units
      t.boolean :has_parking
      t.string :address
      t.text :amenities
      t.float :transit_distance
      t.boolean :has_elevator

      t.timestamps null: false
    end
  end
end
