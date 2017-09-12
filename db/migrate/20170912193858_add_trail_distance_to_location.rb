class AddTrailDistanceToLocation < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :trail_distance, :float
  end
end
