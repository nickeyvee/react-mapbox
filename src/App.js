import React, { useState } from 'react'
import mbxClient from '@mapbox/mapbox-sdk'
import geocoding from '@mapbox/mapbox-sdk/services/geocoding'

import MapContainer from './MapContainer'
import Sidebar from './Sidebar'
import accessToken from './mapbox-config'
import './App.css'

const baseClient = mbxClient({ accessToken })
const geocodingClient = geocoding(baseClient)

function App() {
  const [coord] = useState([-80.1386, 26.8234])
  const [bbox] = useState([-80.2913374215236, 26.7791550588799, -80.0653010128697, 26.9283759272279])
  const [features, setFeatures] = useState([])

  const getCoord = (query) => {
    console.log(query, coord)
    geocodingClient.forwardGeocode({
      query, bbox, limit: 5
    })
      .send()
      .then(({ body }) => {
        console.log(body)
        setFeatures(body.features)
      })
  }
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar
          features={features}
          getCoord={getCoord}
        />
      </div>
      <div>
        <MapContainer
          coord={coord}
        /> 
      </div>
    </div>
  )
}

export default App
