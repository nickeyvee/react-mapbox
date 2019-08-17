import React from 'react'
import ReactMapboxGl, { Layer } from "react-mapbox-gl"
import accessToken from './mapbox-config'

const Map = ReactMapboxGl({ accessToken })
// https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/
function MapContainer (props) {
  console.log(props.coord)
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      zoom={[12]}
      center={props.coord}
    >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
        </Layer>
    </Map>  
  )
}
export default MapContainer
