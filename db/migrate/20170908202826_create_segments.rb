class CreateSegments < ActiveRecord::Migration[5.1]
  def change
    create_table :segments do |t|
<<<<<<< HEAD
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
=======
      t.string :name
      t.string :city
      t.string :elevation_high
      t.string :elevation_low
>>>>>>> e02c885cb396e7f080e176c03280ca9ad597d37e

      t.timestamps
    end
  end
end
