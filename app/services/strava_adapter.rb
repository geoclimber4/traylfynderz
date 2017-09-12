require 'strava/api/v3'

class StravaAdapter
  attr_reader :client

  def initialize
    @client = Strava::Api::V3::Client.new(:access_token => ENV["ACCESS_TOKEN"])
  end

  # use the location api call to convert address into lat and longitude
  # activity_type:	string optional
  # ‘running’ or ‘riding’, default is riding
  # bounds must be ‘sw.lat,sw.lng,ne.lat,ne.lng’
  # coordinates that work: 41.699412,-87.920408,41.725388,-87.885764
  def find_routes(args = {})
    # puts "args is #{args}"
    segment_data = self.client.segment_explorer( bounds: [args[:swlat]||41.699412,args[:swlng]||-87.920408,args[:nelat]||41.725388,args[:nelng]||-87.885764], activity_type: args[:activity_type]||'running')
    segments = []
    segment_data["segments"].each do |seg|
      segments << Segment.create(
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
    p segment_data
    p segments
    return segments
  end

  def find_segment(segment_id)
    self.retrieve_a_segment(segment_id)
    seg = Segment.create(
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
            climb_category: seg["climb_category"])
    return seg
  end
end

  # @client.retrieve_segment_streams(:segment_id)
