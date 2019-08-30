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
  const [coord] = useState([-80.0839623, 26.8337407])
  const [bbox] = useState([-80.135, 26.807, -80.035, 26.870])
  const [options] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const [features, setFeatures] = useState([])
  const [search, setSearch] = useState('restaurants')
  const [item, setItem] = useState(null)
  const [nav, setNav] = useState(false)
  const [zoom] = useState([13])

  const getCoord = (query) => {
    geocodingClient.forwardGeocode({
      query: query || 'restaurants', bbox, limit: 12
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
      <div className={!nav ? 'no-display' : 'display'}>
        <Sidebar  
          item={item}
          options={options}
          search={search}
          setSearch={setSearch}
          setItem={setItem}
          features={features}
          getCoord={getCoord}
          setNav={() => setNav(!nav)}
        />
      </div>
      <MapContainer
        item={item}
        bbox={bbox}
        options={options}
        setItem={setItem}
        features={features}
        zoom={zoom}
        coord={coord}
      />
    </div>
  )
}

export default App
