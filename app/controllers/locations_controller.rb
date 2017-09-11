require 'overpass_api_ruby'

class LocationsController < ApplicationController

  def new
    @location = Location.create({address: "141 Willows Edge Ct. Willow Springs, IL 60480"})
    options={:bbox => {:s => -34.705448, :n => -34.526562,
                   :w => -58.531471, :e => -58.335159},
             :timeout => 900,
             :element_limit => 1073741824}

    overpass = OverpassAPI::XML.new(options)

    query = "<union><query type='relation'><has-kv k='route' v='subway'/></query>" <<
            "</union><union><item/><recurse type='down'/></union>"

    response = overpass.query(query)

    render json: response
  end

  def show

  end

end
