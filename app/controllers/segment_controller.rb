
class SegmentController < ApplicationController

  def index
    @segments = Segment.all
  end

end
