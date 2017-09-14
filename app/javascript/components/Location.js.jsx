import React from 'react';

export default class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {location: [] }
    console.log(this.state)
  }
  // Should return xhr for
  // componentDidMount() {
  //   console.log('Component verily did mount')
  //   $.getJSON('location.json', (response) => { this.setState({
  //     location: response })
  //     console.log("put json here")
  //   }).done(function(response){
  //     console.log(response);
  //   }).fail(function(response){
  //     console.log("no funsies")
  //     console.log(response)
  //   })
  // }

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

        </div>
        )
    }
    return (
      <div>
        {location}
      </div>
      )
  }
    // var segments= this.state.segments.map((segment) => {
    //   console.log(segment)
    //   return (
    //     <div key={segment.id}>
    //       <h5>-{segment.name}-</h5>
    //       <p>{segment.distance} longboys</p>
    //     </div>
    //     // React.createElement('h1', null, '${segment.name} - {segment.distance}')
    //   )
    // })

    // return (
    //   <div>
    //     {segments}
    //   </div>
    // )
  }
// }
