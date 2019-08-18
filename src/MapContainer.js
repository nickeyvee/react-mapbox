import React from 'react'
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl"
// import accessToken from './mapbox-config'
import mapMarker from './map_marker.png'

import './MapContainer.css'

const Map = ReactMapboxGl({ accessToken: process.env.ACCESS_TOKEN })
// https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/
function MapContainer (props) {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      zoom={[12]}
      center={props.coord}
    >
      {props.features && props.features.map((item, index) => (
        <Marker
          onMouseEnter={() => props.setItem({...item, index})}
          onMouseLeave={() => props.setItem(null)}
          coordinates={item.center}
          anchor="bottom"
          key={`marker-${index}`}
        >
          <img 
            style={{ width: '30px' }}
            src={mapMarker}
            alt="mapMarker"
          />
        </Marker>
      ))}
      {props.item &&
        <Popup
          coordinates={props.item.center}
          offset={{
            'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
          }}         
        >
          <span
            style={{ fontWeight: 'bold', color: 'red' }}
          >
            {props.options[props.item.index]}.
          </span>
          <span>&nbsp;&nbsp;</span>
          <span>{props.item.text}</span>
        </Popup>
      }
    </Map>  
  )
}
export default MapContainer
