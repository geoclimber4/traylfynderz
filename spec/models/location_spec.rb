require 'rails_helper'

describe Location do
  let(:location) { Location.create!(address: "Utica, IL")}

  describe "address" do
    it "has an address in string form" do
      p location
      location.segments.each do |segment|
        p segment.first.name
        p segment.first.distance
      end
      expect(location.address).to be_an_instance_of(String)
    end
  end

  describe "coordinates" do
    it "has a latitude" do
      expect(location.latitude).to be_an_instance_of(Float)
    end

    it "has a longitude" do
      expect(location.longitude).to be_an_instance_of(Float)
    end
  end

end
