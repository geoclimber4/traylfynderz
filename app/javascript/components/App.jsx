import React from 'react';
import Form from './Form.js.jsx';
import Location from './Location.js.jsx';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = { value: '', location: [] }
    this.submitHandler = this.submitHandler.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  submitHandler(event) {
    console.log(event)
    event.preventDefault();
    console.log("submit!")
    console.log(this.state.value)
    var dataThing = {location: {address: this.state.value}}
    console.log(dataThing)
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
      console.log(response);
    }).fail(function(response){
      console.log("no funsies")
      console.log(response)
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
