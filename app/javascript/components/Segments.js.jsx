import React from 'react';

export default class Segments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {segments: [] }
    console.log(this.state)
  }
  componentDidMount() {
    console.log('Component verily did mount')
    $.getJSON('segments.json', (response) => { this.setState({
      segments: response }) })
  }

  render() {
    var segments= this.state.segments.map((segment) => {
      console.log(segments)
      return (
        <h1>{segment.name} - {segment.distance}</h1>
        // React.createElement('h1', null, '${segment.name} - {segment.distance}')
      )
    })

    return (
      <div>
        {segments}
      </div>
    )
  }
}
