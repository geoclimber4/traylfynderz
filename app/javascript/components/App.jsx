import React from 'react';
import Form from './Form.js.jsx';
import Location from './Location.js.jsx';
import { Map, TileLayer } from 'react-leaflet';

const Tiles = 'http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
const TileAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
const loc = [41.74086519999999, -87.86033429999999];
const zoomLevel = 12;
const testGeo = {
  "version": 0.6,
  "generator": "Overpass API",
  "osm3s": {
    "timestamp_osm_base": "2017-09-13T14:09:02Z",
    "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL."
  },
  "elements": [

{
  "type": "relation",
  "id": 3048638,
  "members": [
    {
      "type": "way",
      "ref": 228201231,
      "role": "outer"
    },
    {
      "type": "way",
      "ref": 228201220,
      "role": "inner"
    },
    {
      "type": "way",
      "ref": 228201219,
      "role": "inner"
    }
  ],
  "tags": {
    "highway": "footway",
    "type": "multipolygon"
  }
},
{
  "type": "node",
  "id": 2368349401,
  "lat": 41.8003774,
  "lon": -87.8808028
},
{
  "type": "node",
  "id": 2368349426,
  "lat": 41.8003852,
  "lon": -87.8805439
},
{
  "type": "node",
  "id": 2368349511,
  "lat": 41.8004116,
  "lon": -87.8807629
},
{
  "type": "node",
  "id": 2368349521,
  "lat": 41.8004133,
  "lon": -87.8806786
},
{
  "type": "node",
  "id": 2368349562,
  "lat": 41.8004362,
  "lon": -87.8805177
},
{
  "type": "node",
  "id": 2368349569,
  "lat": 41.8004443,
  "lon": -87.8808871
},
{
  "type": "node",
  "id": 2368349574,
  "lat": 41.8004475,
  "lon": -87.8807862
},
{
  "type": "node",
  "id": 2368349583,
  "lat": 41.8004587,
  "lon": -87.8803918
},
{
  "type": "node",
  "id": 2368349594,
  "lat": 41.8004711,
  "lon": -87.8807650
},
{
  "type": "node",
  "id": 2368349597,
  "lat": 41.8004728,
  "lon": -87.8806807
},
{
  "type": "node",
  "id": 2368349612,
  "lat": 41.8004978,
  "lon": -87.8803900
},
{
  "type": "node",
  "id": 2368349620,
  "lat": 41.8005086,
  "lon": -87.8803625
},
{
  "type": "node",
  "id": 2368349631,
  "lat": 41.8005179,
  "lon": -87.8805887
},
{
  "type": "node",
  "id": 2368349637,
  "lat": 41.8005283,
  "lon": -87.8805672
},
{
  "type": "node",
  "id": 2368349657,
  "lat": 41.8005553,
  "lon": -87.8807312
},
{
  "type": "node",
  "id": 2368349661,
  "lat": 41.8005614,
  "lon": -87.8805695
},
{
  "type": "node",
  "id": 2368349666,
  "lat": 41.8005687,
  "lon": -87.8804515
},
{
  "type": "node",
  "id": 2368349726,
  "lat": 41.8006784,
  "lon": -87.8807396
},
{
  "type": "node",
  "id": 2368349728,
  "lat": 41.8006890,
  "lon": -87.8804598
},
{
  "type": "node",
  "id": 2368349753,
  "lat": 41.8007404,
  "lon": -87.8808028
},
{
  "type": "node",
  "id": 2368349754,
  "lat": 41.8007431,
  "lon": -87.8807559
},
{
  "type": "node",
  "id": 2368349761,
  "lat": 41.8007647,
  "lon": -87.8807406
},
{
  "type": "node",
  "id": 2368349765,
  "lat": 41.8007735,
  "lon": -87.8804499
},
{
  "type": "node",
  "id": 2368349766,
  "lat": 41.8007736,
  "lon": -87.8807576
},
{
  "type": "node",
  "id": 2368349767,
  "lat": 41.8007741,
  "lon": -87.8807411
},
{
  "type": "node",
  "id": 2368349773,
  "lat": 41.8007922,
  "lon": -87.8804509
},
{
  "type": "node",
  "id": 2368349774,
  "lat": 41.8007944,
  "lon": -87.8803791
},
{
  "type": "way",
  "id": 228201219,
  "nodes": [
    2368349511,
    2368349521,
    2368349597,
    2368349594,
    2368349511
  ]
},
{
  "type": "way",
  "id": 228201220,
  "nodes": [
    2368349637,
    2368349661,
    2368349657,
    2368349726,
    2368349728,
    2368349666,
    2368349612,
    2368349562,
    2368349631,
    2368349637
  ]
},
{
  "type": "way",
  "id": 228201231,
  "nodes": [
    2368349569,
    2368349401,
    2368349426,
    2368349583,
    2368349620,
    2368349774,
    2368349773,
    2368349765,
    2368349761,
    2368349767,
    2368349766,
    2368349754,
    2368349753,
    2368349574,
    2368349569
  ]
}

  ]
}

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = { address: '',
                  activity_type: 'riding',
                  trail_distance: '',
                  location: [] }
    this.submitHandler = this.submitHandler.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      const leafletMap = this.leafletMap;
  }

  submitHandler(event) {
    // console.log(event)
    event.preventDefault();
    console.log("submit!")
    // console.log(this)
    // console.log(this.state)
    const leafletMap = this.leafletMap.leafletElement;
    // console.log(this.state.value)
    var dataThing = {location: {address: this.state.address,
                                activity_type: this.state.activity_type,
                                trail_distance: this.state.trail_distance
                              }}
    // console.log(dataThing)
    // $.getJSON('location.json', (response) => { this.setState({
    //   location: response })
    //   console.log(response)
    //   console.log("put json here")
    // $.getJSON('location.json', function(data) {
    $.ajax({
      // dataType: 'json',
      url: '/locations',
      method: 'POST',
      data: dataThing
    }).done(function(response){
      const loc = [response.latitude, response.longitude]
      leafletMap.setView(loc, 14);
      $("#trails_container").empty();
      $("#trails_container").append("<h3 class='location'>Trails near " + response.address + "</h3>")
      $(".location").after("<ul class='trails_list'></ul>");
        response.trails.forEach(function(trail){
          if(trail.name) {
            var name = trail.name
            if(trail.bicycle) {
              var bicycle = "yes"
            }
            else {
              var bicycle = "not noted"
            }
            if(trail.foot) {
              var foot = "yes"
            }
            else {
              var foot = "not noted"
            }
            $(".trails_list").append("<li>" + name + "</br>Bicycle:  " + bicycle + "</br>Foot:  " + foot + "</br><a href='http://www.openstreetmap.org/way/" + trail.feature_id + "'>Link to this trail on OpenStreetMap</a></li>");
          }
        });
      // test map modify for trail
      var trailThing = 32901247

      $("#segments_container").empty();
      $("#segments_container").append("<h3 class='address'>Segments near </h3>")
      $(".address").append(response.address);
      $(".address").after("<ul class='segment_list'></ul>");
      response.segments.forEach(function(segment){
        var name = segment.name
        var distance = segment.distance
        var strava_id = segment.strava_id
        var segCoord = [segment.start_lat, segment.start_long]
        console.log(segCoord);
        // var myMarker = L.icon({
        //   iconUrl: '/assets/images/map_marker.png'
        // })
        L.marker(segCoord).addTo(leafletMap).bindPopup("<p>" + name + "</br>Distance:  " + distance + " meters</br>" + strava_id + "</br><a href='https://www.strava.com/segments/" + strava_id + "'>Link to this segment on Strava</a></p>").openPopup;;
        $(".segment_list").append("<li>" + name + "</br>Distance:  " + distance + " meters</br>" + strava_id + "</br><a href='https://www.strava.com/segments/" + strava_id + "'>Link to this segment on Strava</a></li>");
      });
      $(".address_form input[type=text]").val("");
        var geothingy = response.geo
        // geothingy["elements"].forEach(function())
        var osmtogeojson = require('osmtogeojson');
        var winner = osmtogeojson(geothingy);
        console.log(winner);
        L.geoJSON(winner, {
          "color": "purple",
          "weight": 5
        }).addTo(leafletMap);

    }).fail(function(response){
      console.log("no funsies")
      console.log(response)
    })
  }

  handleChange(event) {
    // console.log("handleChange is below")
    // console.log(event.target)
    // console.log(event.target.address)
    if(event.target.name == 'address'){
      this.setState({address: event.target.value});
    }
    if(event.target.name == 'activity_type'){
      this.setState({activity_type: event.target.value});
    }
    if(event.target.name == 'trail_distance'){
      this.setState({trail_distance: event.target.value});
    }

  }

  render() {
    return (
    <div>
      <div>
          <Map
              ref={m => { this.leafletMap = m; }}
              center={loc}
              zoom={zoomLevel}
          >
              <TileLayer
                  attribution={TileAttr}
                  url={Tiles}
                  id='mapbox.run-bike-hike'
                  accessToken='your.mapbox.access.token'
              />
          </Map>
      </div>
      <div>
      <Form handleSubmit={this.submitHandler} handleChange={this.handleChange} />
      <Location location={this.state.location} />
      </div>
    </div>
      )
  }
}
export default App;
