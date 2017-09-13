// import React from 'react'
// import ReactDOM from 'react-dom'
// import L from 'leaflet';
// // import { Map, TileLayer } from 'react-leaflet'
// // const position = [41.74086519999999, -87.86033429999999]
// export class MapView extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//     const loc = [41.74086519999999, -87.86033429999999]
//     const mymap = L.map('mapid').setView(loc, 14);
//     var myLayer = L.geoJSON().addTo(mymap)
//
// 
// render() {
//     return (
//       <div>
//       L.tileLayer('http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
//           attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//           maxZoom: 18,
//           id: 'mapbox.run-bike-hike',
//           accessToken: 'your.mapbox.access.token'
//       }).addTo(mymap);
//
//         // <Map
//         //   style={{height: "100vh"}}
//         //   center={position}
//         //   zoom={10}>
//         //   <TileLayer
//         //  url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvY2xpbWJlcjQiLCJhIjoiY2o3aTkxZmo3MXE4MTJxcGR2OTRodnliOCJ9.EX40dqh8X22gZ712BY33WQ"
//         //     attribution="www.mapbox.com" />
//         // </Map>
//       </div>
//     )
//   }
// }
