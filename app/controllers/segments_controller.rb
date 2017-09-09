class SegmentsController < ApplicationController

  def index
    # segments = Segment.all
    # respond_to do |format|
    #   format.json { render :json => segments }
    # end

    # respond_with Segment.all

    @adapter = StravaAdapter.new
    p "right route"

    segments = @adapter.find_routes
    p segments
    render json: segments
  end



  private

  def segment_params
    params.require(:segment).permit(:id, :name, :distance)
  end

end
