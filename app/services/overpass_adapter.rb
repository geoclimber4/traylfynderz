require 'overpass_api_ruby'

class OverpassAdapter

# rewrite this to take arguments, possibly refactor to trail model
  def find_trails
    json = self.run_query
    return json
  end



  def run_query
    options={:bbox => {:s => 41.69592025780443,
                       :n => 41.705119764133286,
                       :w => -87.89371490478516,
                       :e => -87.88287878036499},
             :timeout => 900,
             :element_limit => 1073741824}

        overpass = OverpassAPI::XML.new(options)

        query = "<union><query type='way'><has-kv k='highway' modv='' v='path'/></query>" <<
                 "</union><union><item/><recurse type='down'/></union>"

        response = overpass.query(query)

    return response
  end
end
