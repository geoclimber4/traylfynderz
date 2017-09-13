import React from 'react';
import Form from './Form.js.jsx';
import Location from './Location.js.jsx';
import { Map, TileLayer } from 'react-leaflet';

const stamenTonerTiles = 'http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
const mapCenter = [39.9528, -75.1638];
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
  submitHandler(event) {
    // console.log(event)
    event.preventDefault();
    console.log("submit!")
    // console.log(this)
    // console.log(this.state)

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
      // console.log("This is the verything's okay alarm")
      // console.log(response)
      // console.log(response.latitude);
      // console.log(response.longitude);
      const loc = [response.latitude, response.longitude]
      mymap.setView(loc, 14);
      L.marker(loc).addTo(mymap);
      // $("#app").append(response.segments[0].name);
      $("#segments_container").empty();
      $("#segments_container").append("<h3 class='address'></h3>")
      $(".address").append(response.address);
      $(".address").after("<ul class='segment_list'></ul>");
      response.segments.forEach(function(segment){
        console.log(segment.name);
        // $(".segment_list").append("<li></li>")
        var name = segment.name
        var distance = segment.distance
        var segCoord = [segment.start_lat, segment.start_long]
        console.log(segCoord)
        L.marker(segCoord).addTo(mymap);
        $(".segment_list").append("<li>" + name + "</br>Distance:  " + distance + " meters</li>");
      });
      $(".address_form input[type=text]").val("");
    }).fail(function(response){
      console.log("no funsies")
      console.log(response)
    })
  }

  handleChange(event) {
    console.log("handleChange is below")
    console.log(event.target)
    console.log(event.target.address)
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
              center={mapCenter}
              zoom={zoomLevel}
          >
              <TileLayer
                  attribution={stamenTonerAttr}
                  url={stamenTonerTiles}
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
