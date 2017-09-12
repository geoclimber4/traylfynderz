class Location < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

  has_many :segments
  has_many :trails
end
