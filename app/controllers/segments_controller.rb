

class SegmentsController < ApplicationController

  # def index
  #   @segments = Segment.all
  #   respond_to do |f|
  #     f.json { render :json => @segments }
  #   end
  # end

  def index

    @adapter = StravaAdapter.new
    p "right route"

    @segments = @adapter.find_routes  
    p @segments
    render json: @segments
  end
end
