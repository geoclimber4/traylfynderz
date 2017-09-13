class CreateTrails < ActiveRecord::Migration[5.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.integer :feature_id
      t.string :bicycle
      t.string :foot
      t.string :owner
      t.string :surface
      t.string :geo

      t.timestamps
    end
  end
end
