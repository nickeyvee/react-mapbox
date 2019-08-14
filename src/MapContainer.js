import React from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja2V5dmVlIiwiYSI6ImNqejdwb3FoZTBoMzEzYm1qOHlwaTh4eTMifQ.szHP6I8_HT6BtVPVsAbrag'
const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoibmlja2V5dmVlIiwiYSI6ImNqejdwb3FoZTBoMzEzYm1qOHlwaTh4eTMifQ.szHP6I8_HT6BtVPVsAbrag'
});

// https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/

function MapContainer (props) {
  // const map = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v9',
  //   center: props.coord,
  //   zoom: 13
  // })
  map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, mapboxgl
  }))
  return (
    // <div id="map">
    //   {/* PLACEHOLDER */}
    // </div>
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
          <Feature coordinates={props.coord}/>
        </Layer>
    </Map>  
  )
}
export default MapContainer
