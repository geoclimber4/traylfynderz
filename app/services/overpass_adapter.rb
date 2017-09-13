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

  def run_query(args)
      south = args[:swlat] || 41.6959
      north = args[:nelat] || 41.70511
      west = args[:swlng] || -87.8937
      east = args[:nelng] || -87.8828
      p south
      p north
      p east
      p west
      p args
    options={:bbox => {:s => south,
                       :n =>  north,
                       :w => west,
                       :e => east },
             :timeout => 900,
             :element_limit => 1073741824}

        overpass = OverpassAPI::XML.new(options)

        raw_query = "<union><query type='way'><has-kv k='highway' modv='' v='path'/></query>" <<
                 "</union><union><item/><recurse type='down'/></union>"

        response = overpass.query(query)
        p response
    return response
  end

  def find_open_trail(trail)
    openStreet_id = trail.feature_id
    # find location box for query
    # change query below to search for feature_id, think below works but not sure
      # query = "<union><query type='way'><has-kv k='id' modv='' v=#{openStreet_id}/></query>" <<
      #        "</union><union><item/><recurse type='down'/></union>"

      # return should be a geojson
    return response
  end



end

# <osm-script output="json" output-config="" timeout="25">
#   <union into="_">
#     <query into="_" type="way">
#       <has-kv k="highway" modv="" v="path"/>
#       <bbox-query e="-111.6243553161621" into="_" n="35.22974663750046" s="35.210520085118254" w="-111.65152072906494"/>
#     </query>
#   </union>
#   <print e="" from="_" geometry="skeleton" limit="" mode="body" n="" order="id" s="" w=""/>
#   <recurse from="_" into="_" type="down"/>
#   <print e="" from="_" geometry="skeleton" limit="" mode="skeleton" n="" order="quadtile" s="" w=""/>
# </osm-script>
