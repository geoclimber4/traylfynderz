class TrailsController < ApplicationController

  def new
    p "trails new"
    @adapter = OverpassAdapter.new
    @location = Location.create(address: "Flagstaff, AZ")
    p @location
    geojson = @adapter.run_query(
          swlat: (@location.latitude - 0.1),
          swlng: (@location.longitude - 0.1 ),
          nelat: (@location.latitude + 0.1),
          nelng: (@location.longitude + 0.1))
    p geojson
    @trails = @adapter.find_trails(geojson)
    p @trails
    render json: @trails.to_json
  end

  def show
    @trail = Trail.find(params[:id])

    @adapter = OverpassAdapter.new
    geojson = @adapter.find_open_trail(@trail)
    render json: geojson
  end

  # add link or button to load above route

end
