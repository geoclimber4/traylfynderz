class AddGeoToLocation < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :geo, :json
  end
end
