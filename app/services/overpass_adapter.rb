require 'overpass_api_ruby'

class OverpassAdapter

# rewrite this to take arguments, possibly refactor to trail model
  def find_trails(geojson)
    ways = geojson[:elements].select {|hashie_guy|  hashie_guy[:type] == "way"  }
    trails = ways.map do |item|
      p item
      Trail.create(
        name: item[:tags][:name],
        feature_id: item[:id],
        bicycle: item[:tags][:bicycle],
        foot: item[:tags][:foot],
        owner: item[:tags][:owner],
        surface: item[:tags][:surface],
        geo: item[:nodes]
        )
    end

    return trails
  end



  def run_query(args )
      south = args[:swlat] || 41.6959
      north = args[:nelat] || 41.70511
      east = args[:swlong] || -87.8828
      west = args[:nelong] || -87.8937

    options={:bbox => {:s => south,
                       :n =>  north,
                       :w => west,
                       :e => east },
             :timeout => 900,
             :element_limit => 1073741824}

        overpass = OverpassAPI::XML.new(options)

        query = "<union><query type='way'><has-kv k='highway' modv='' v='path'/></query>" <<
                 "</union><union><item/><recurse type='down'/></union>"

        response = overpass.query(query)

    return response
  end
end
