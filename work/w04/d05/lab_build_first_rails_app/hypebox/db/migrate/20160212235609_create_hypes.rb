class CreateHypes < ActiveRecord::Migration
  def change
    create_table :hypes do |t|
      t.string :msg
      t.string :user

      t.timestamps null: false
    end
  end
end
