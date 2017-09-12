class AddLocationIdToSegments < ActiveRecord::Migration[5.1]
  def change
    add_column :segments, :location_id, :integer
  end
end
