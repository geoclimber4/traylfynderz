class SegmentsController < ApplicationController

  def index
    @segments = Segment.all
    respond_to do |f|
      f.json { render :json => @segments }
    end
  end

end
