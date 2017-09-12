class TrailsController < ApplicationController

  def new
    p "trails new"
    @adapter = OverpassAdapter.new

    render json: @adapter.find_trails
  end

end
