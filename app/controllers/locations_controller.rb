class LocationsController < ApplicationController
  def create
    p "Hit locations controller"
    p params[:location]

    @location = Location.new(location_params)
    # p location_params
    if @location.save
      p @location.trails
      @swlat = @location.latitude - 0.1
      @swlng = @location.longitude - 0.1
      @nelat = @location.latitude + 0.1
      @nelng = @location.longitude + 0.1
      # puts "swlat is #{@swlat}; swlng is #{@swlng}; nelat is #{@nelat}; nelng is #{@nelng}"
      @stravaLocation = StravaAdapter.new
      @location.segments = @stravaLocation.find_routes(
          swlat: @swlat,
          swlng: @swlng,
          nelat: @nelat,
          nelng: @nelng,
          activity_type: @location.activity_type
        )
      @overpassAdapter = OverpassAdapter.new
      @geojson = @overpassAdapter.run_query(
          swlat: @swlat,
          swlng: @swlng,
          nelat: @nelat,
          nelng: @nelng,
        )
      @location.geo = @geojson
      @location.trails = @overpassAdapter.find_trails(@geojson)
      p @location.trails
      p @location.geo
      render json: @location.to_json( :include => [:segments, :trails])
    else
      redirect_to root_path
    end
  end

  def show
    p "Locations Show controller"
    @location = Location.find(params[:id])
    @swlat = @location.latitude - 0.1
    @swlng = @location.longitude - 0.1
    @nelat = @location.latitude + 0.1
    @nelng = @location.longitude + 0.1
    # puts "swlat is #{@swlat}; swlng is #{@swlng}; nelat is #{@nelat}; nelng is #{@nelng}"
    @stravaLocation = StravaAdapter.new
    @location.segments = @stravaLocation.find_routes(swlat: @swlat, swlng: @swlng, nelat: @nelat, nelng: @nelng)
    # p@segments"
    render json: @location.to_json( :include => [:segments])
  end

  private

  def location_params
    params.require(:location).permit(:address, :id, :activity_type, :trail_distance)
  end

  def segment_params
    params.require(:segment).permit(:id, :name, :distance)
  end
end
