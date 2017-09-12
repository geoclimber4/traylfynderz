require 'overpass_api_ruby'

class LocationsController < ApplicationController

  def new
    @location = Location.create({address: "141 Willows Edge Ct. Willow Springs, IL 60480"})
    options={:bbox => {:s => 41.75, :n => 41.8, :w => -87.9, :e => -87.8},
             :timeout => 900,
             :element_limit => 1073741824}

    overpass = OverpassAPI::XML.new(options)

    query = "<union><query type='way'><has-kv k='highway' v='footway'/></query>" <<
            "</union><union><item/><recurse type='down'/></union>"

    response = overpass.query(query)
    p response[:elements]

    render json: response[:elements]
  end

  def show

  end

end
