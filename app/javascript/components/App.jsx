import React from 'react';
import Form from './Form.js.jsx';
import Location from './Location.js.jsx';
import { Map, TileLayer } from 'react-leaflet';

const Tiles = 'http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
const TileAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
const loc = [41.74086519999999, -87.86033429999999];
const zoomLevel = 12;

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
      $("#trails_container").append("<h3 class='location'>Trails near </h3>")
      $(".location").append(response.address);
      $(".location").after("<ul class='trails_list'></ul>");
      // if (result.activity_type == "riding") {
        response.trails.forEach(function(trail){
          // if (trail.bicycle == "yes"){
            var featureId = trail.feature_id
            var name = trail.name
            $(".trails_list").append("<li>" + featureId + "</li>");
          // }
        // })
      // }
      // if (result.activity_type == "running") {
      //   response.trails.forEach(function(trail){
      //     if (trail.foot == "yes"){
      //       var featureId = trail.feature_id
      //       var name = trail.name
      //       $(".trails_list").append("<li>" + featureId + "</li>");
      //     }
      //   })
      // }
      });

      $("#segments_container").empty();
      $("#segments_container").append("<h3 class='address'>Segments near </h3>")
      $(".address").append(response.address);
      $(".address").after("<ul class='segment_list'></ul>");
      response.segments.forEach(function(segment){
        var name = segment.name
        var distance = segment.distance
        var segCoord = [segment.start_lat, segment.start_long]
        console.log(segCoord);
        // var myMarker = L.icon({
        //   iconUrl: '/assets/images/map_marker.png'
        // })
        L.marker(segCoord).addTo(leafletMap);
        $(".segment_list").append("<li>" + name + "</br>Distance:  " + distance + " meters</li>");
      });
      $(".address_form input[type=text]").val("");
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
