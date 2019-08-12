import React from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoibmlja2V5dmVlIiwiYSI6ImNqejdwb3FoZTBoMzEzYm1qOHlwaTh4eTMifQ.szHP6I8_HT6BtVPVsAbrag'
});

function MapContainer () {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </Map>  
  )
}
export default MapContainer
