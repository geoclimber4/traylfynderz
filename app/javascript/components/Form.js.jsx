import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {address: '',
    //               activity_type: ''
    //               // trail_distance: ''
    //             };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   // alert('A name was submitted in form.js: ' + this.state.value);
  //   event.preventDefault();
  //   console.log("submit from the form.js!")
  //   this.props.handleSubmit
  // }

  render() {
    return (
      <div>
        <form className="address_form" action="/locations" method="POST" onSubmit={this.props.handleSubmit} >
          <label>
            Location:
            <input type="text" name="address" onChange={this.props.handleChange} />
          </label>
          <br />
          <label>
            Choose type of activity:
            <select name="activity_type" onChange={this.props.handleChange}>
              <option value="riding">Riding</option>
              <option value="running">Running</option>
            </select>
          </label>
          <br />
          <label>
            Choose distance of trail:
            <input type="number" name="trail_distance" onChange={this.props.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
