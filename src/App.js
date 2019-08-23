import React, { useState } from 'react'
import mbxClient from '@mapbox/mapbox-sdk'
import geocoding from '@mapbox/mapbox-sdk/services/geocoding'

import MapContainer from './MapContainer'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import './App.css'

const baseClient = mbxClient({ accessToken: process.env.REACT_APP_ACCESS_TOKEN })
const geocodingClient = geocoding(baseClient)

function App() {
  const [coord] = useState([-80.1386, 26.8234]) // Default (Palm Beach Gardens)
  const [bbox] = useState([-80.2913374215236, 26.7791550588799, -80.0653010128697, 26.9283759272279]) // Default
  const [options] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const [features, setFeatures] = useState([])
  const [search, setSearch] = useState('restaurants')
  const [item, setItem] = useState(null)
  const [nav, setNav] = useState(false)

  const getCoord = (query) => {
    if (!query) { return }
    geocodingClient.forwardGeocode({
      query, bbox, limit: 10
    })
      .send()
      .then(({ body }) => {
        setFeatures(body.features)
      })
  }
  return (
    <div className="app">
      <div className="positioned">
      <Hamburger setNav={() => setNav(!nav)}/>
      </div>
      { nav && <Sidebar
          item={item}
          options={options}
          search={search}
          setSearch={setSearch}
          setItem={setItem}
          features={features}
          getCoord={getCoord}
          setNav={() => setNav(!nav)}
        />
      }
      <MapContainer
        item={item}
        options={options}
        setItem={setItem}
        features={features}
        coord={coord}
      />
    </div>
  )
}

export default App
