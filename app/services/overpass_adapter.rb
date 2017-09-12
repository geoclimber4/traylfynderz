require 'overpass_api_ruby'

class OverpassAdapter

# rewrite this to take arguments, possibly refactor to trail model
  def run_query
    options={:bbox => {:s => 41.69592025780443,
                       :n => 41.705119764133286,
                       :w => -87.89371490478516,
                       :e => -87.88287878036499},
             :timeout => 900,
             :maxsize => 1073741824}

    overpass = OverpassAPI::QL.new(options)

    query = "way["highway"="path"];(._;>;);out body;"

    response = overpass.query(query)

    return response
  end
end
