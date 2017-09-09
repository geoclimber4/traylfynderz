class SegmentsController < ApplicationController

  def index
    segments = Segment.all
    respond_to do |format|
      format.json { render :json => segments }
    end
  end

  @adapter = StravaAdapter.new
  p "right route"

  @segments = @adapter.find_routes
  p @segments
  render json: @segments

end
