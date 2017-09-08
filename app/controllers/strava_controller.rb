get '/strava' do
  @adapter = StravaAdapter.new
  p @adapter

  p @adapter.client.retrieve_a_segment(1218780)
    segments = @adapter.client.segment_explorer( bounds: [37.821362,-122.505373,37.842038,-122.465977])
    @segments = segments["segments"]
    erb :'strava/index'
end
