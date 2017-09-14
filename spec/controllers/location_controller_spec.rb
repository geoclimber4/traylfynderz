require 'rails_helper'

describe LocationsController do
  let!(:location) { Location.create!(address: "Urbana, IL") }
  describe "POST #create" do
    it "creates a new location in the database" do
      post :create, params: { location: { address: "Sugar Grove, IL" } }
      expect(:location).should_not be_nil
    end

    it "assigns the newly created location as @location" do
      post :create, params: { location: { address: "Willow Springs, IL" } }
      expect(assigns(:location)).to be_an_instance_of Location
    end
  end
end
