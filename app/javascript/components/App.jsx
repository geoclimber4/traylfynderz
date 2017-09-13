import React from 'react';
import Form from './Form.js.jsx';
import Location from './Location.js.jsx';

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
    console.log(event)
    event.preventDefault();
    console.log("submit!")
    console.log(this)
    console.log(this.state)

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
      mymap.setView(loc, 14);
      $("#trails_container").empty();
      $("#trails_container").append("<h3 class='location'>Trails near </h3>")
      $(".location").append(response.address);
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
            $(".trails_list").append("<li>" + name + "</br>Bycicle:  " + bicycle + "</br>Foot:  " + foot + "</li>");
          }
        });

      $("#segments_container").empty();
      $("#segments_container").append("<h3 class='address'>Segments near </h3>")
      $(".address").append(response.address);
      $(".address").after("<ul class='segment_list'></ul>");
      response.segments.forEach(function(segment){
        var name = segment.name
        var distance = segment.distance
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
      <Form handleSubmit={this.submitHandler} handleChange={this.handleChange} />
      <Location location={this.state.location} />
      </div>
      )
  }
}
export default App;
