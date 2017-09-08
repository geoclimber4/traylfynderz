
# class SegmentController < ApplicationController
#
# # [41.725388, -87.885764, 41.697764, -87.844663]
#
#   def index
#
#     @adapter = StravaAdapter.new
#     p "right route"
#     segment_data = @adapter.client.segment_explorer( bounds: [41.725388, -87.885764, 41.697764, -87.844663])
#     @segments = []
#     p segment_data["segments"]
# # this should be an array
# segment_data["segments"].each do |seg|
#     @segments << Segment.create(
#       strava_id: seg["id"],
#       name: seg["name"],
#       distance: seg["distance"]
#     )
#   end
#   p @segments
# end

# old coord: [37.821362,-122.505373,37.842038,-122.465977]
