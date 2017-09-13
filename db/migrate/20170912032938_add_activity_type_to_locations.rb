class AddActivityTypeToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :activity_type, :string
  end
end
