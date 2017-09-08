class CreateSegments < ActiveRecord::Migration[5.1]
  def change
    create_table :segments do |t|
      t.integer :strava_id
      t.string :name
      t.string :distance
      t.string :average_grade
      t.string :maximum_grade
      t.decimal :start_lat
      t.decimal :start_long
      t.decimal :end_lat
      t.decimal :end_long
      t.decimal :avg_grade

      t.timestamps
    end
  end
end
