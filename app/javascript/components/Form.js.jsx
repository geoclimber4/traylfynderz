import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
