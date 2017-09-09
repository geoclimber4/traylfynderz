require 'strava/api/v3'

class StravaAdapter
  attr_reader :client

  def initialize
    @client = Strava::Api::V3::Client.new(:access_token => ENV["ACCESS_TOKEN"])
  end

  # https://www.strava.com/oauth/authorize?
  #   client_id=9
  #   &response_type=code
  #   &redirect_uri=http://testapp.com/token_exchange
end

  # @client.retrieve_segment_streams(:segment_id)
