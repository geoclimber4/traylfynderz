class AddLocationIdToTrails < ActiveRecord::Migration[5.1]
  def change
    add_column :trails, :location_id, :integer
  end
end
