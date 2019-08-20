import React, { useState } from 'react'
import mbxClient from '@mapbox/mapbox-sdk'
import geocoding from '@mapbox/mapbox-sdk/services/geocoding'

import MapContainer from './MapContainer'
import Sidebar from './Sidebar'
import accessToken from './mapbox-config'
import './App.css'

const baseClient = mbxClient({ accessToken: process.env.REACT_APP_ACCESS_TOKEN || accessToken })
const geocodingClient = geocoding(baseClient)

function App() {
  const [coord] = useState([-80.1386, 26.8234]) // Default (Palm Beach Gardens)
  const [bbox] = useState([-80.2913374215236, 26.7791550588799, -80.0653010128697, 26.9283759272279]) // Default
  const [options] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const [features, setFeatures] = useState([])
  const [item, setItem] = useState(null)

  const getCoord = (query) => {
    if (!query) {
      return console.log('Search Empty, Exiting...')
    }
    geocodingClient.forwardGeocode({
      query, bbox, limit: 10
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
          item={item}
          options={options}
          setItem={setItem}
          features={features}
          getCoord={getCoord}
        />
      </div>
      <div>
        <MapContainer
          item={item}
          options={options}
          setItem={setItem}
          features={features}
          coord={coord}
        /> 
      </div>
    </div>
  )
}

export default App
