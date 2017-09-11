class LocationsController < ApplicationController
  def create
    @location = Location.new({address: params[:address]})
    if @location.save
      redirect_to(@location.segments)
    else
      redirect_to root_path
    end
  end
end
