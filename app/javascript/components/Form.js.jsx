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
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        <form action="/locations" method="POST">
          <label>
            Location:
            <input type="text" name="address" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
