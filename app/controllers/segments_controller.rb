

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
    # bounds must be ‘sw.lat,sw.lng,ne.lat,ne.lng’
    segment_data = @adapter.client.segment_explorer( bounds: [41.699412,-87.920408,41.725388,-87.885764])
    @segments = []
    p segment_data
    p "*"
    p segment_data["segments"]
    # this should be an array
    segment_data["segments"].each do |seg|
      @segments << Segment.create(
        strava_id: seg["id"],
        name: seg["name"],
        distance: seg["distance"],
        average_grade: seg["avg_grade"],
        start_lat: seg["start_latlng"][0],
        start_long: seg["start_latlng"][1],
        end_lat: seg["end_latlng"][0],
        end_long: seg["end_latlng"][1],
        avg_grade: seg["avg_grade"],
        climb_category_desc: seg["climb_category_desc"],
        climb_category: seg["climb_category"]
        )
    end
  p @segments
  render json: @segments
  end
end
