import React from 'react';

export default class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {location: [] }
    console.log(this.state)
  }

  render() {
    if (this.props.location.length > 0) {
      var location= this.props.location
      return(
          <div key={location.id}>
            <h5>-{location.address}-</h5>
          </div>
        )
    }
    else {
      return (
        <div>
          loading...
        </div>
        )
    }
    return (
      <div>
        {location}
      </div>
    )
  }

}

