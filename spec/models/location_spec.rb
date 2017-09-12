require 'rails_helper'

describe Location do
  let(:location) { Location.new({"Utica, IL"})}

  describe "segments" do
    it "has a collection of segments" do
      expect(location.segments).to be_an_instance_of(Array)
    end
  end



end
