class SegmentsController < ApplicationController

  def index
    @segments = Segment.all
    respond_to do |format|
      format.json { render :json => @segments }
    end
  end

end
