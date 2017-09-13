class RemoveLocationIdFromTrails < ActiveRecord::Migration[5.1]
  def change
    remove_index :trails, :location_id
    remove_column :trails, :location_id, :string
  end
end
