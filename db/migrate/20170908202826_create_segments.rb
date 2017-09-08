class CreateSegments < ActiveRecord::Migration[5.1]
  def change
    create_table :segments do |t|
      t.string :name
      t.string :city
      t.string :elevation_high
      t.string :elevation_low

      t.timestamps
    end
  end
end
