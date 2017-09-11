class SegmentsController < ApplicationController

  def index
    # segments = Segment.all
    # respond_to do |format|
    #   format.json { render :json => segments }
    # end

    # respond_with Segment.all

    @adapter = StravaAdapter.new
    p "right route"

    @segments ||= @adapter.find_routes
    p @segments
    render json: @segments
  end

  def create
    # create new location object in Location model, based on geocoder return from address input.
    @location = Location.create({address: params[:address]})
    # puts "location is #{@location.latitude} long #{@location.longitude}"
    @swlat = @location.latitude - 0.1
    @swlng = @location.longitude - 0.1
    @nelat = @location.latitude + 0.1
    @nelng = @location.longitude + 0.1
    # puts "swlat is #{@swlat}; swlng is #{@swlng}; nelat is #{@nelat}; nelng is #{@nelng}"
    @stravaLocation = StravaAdapter.new
    @segments = @stravaLocation.find_routes({swlat: @swlat, swlng: @swlng, nelat: @nelat, nelng: @nelng})
    # puts "segments are #{@segments}"
    redirect_to root_path
    # hard code distance from address for now. This distance dictates the distance to the two corners of the square for the segment search.
  end

  private

  def segment_params
    params.require(:segment).permit(:id, :name, :distance)
  end

end
