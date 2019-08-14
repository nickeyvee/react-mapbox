import React, { useState } from 'react';
import mbxClient from 'mapbox-gl'
// import axios from 'axios';

import MapContainer from './MapContainer'
import Sidebar from './Sidebar'

import './App.css';
 
// const baseClient = mbxClient({ accessToken: 'pk.eyJ1Ijoibmlja2V5dmVlIiwiYSI6ImNqejdwb3FoZTBoMzEzYm1qOHlwaTh4eTMifQ.szHP6I8_HT6BtVPVsAbrag' })

function App() {
  const coord = useState([-0.481747846041145, 51.3233379650232])

  const getCoord = v => {
    console.log(v)
    // baseClient.forewardGeocode(v, function(err, data, res) {
      // console.log(err, data)
      // data is the geocoding result as parsed JSON
      // res is the http response, including: status, headers and entity properties
    // });
  }
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar
          getCoord={getCoord}
        />
      </div>
      <div>
        <MapContainer
          coord={coord}
        /> 
      </div>
    </div>
  );
}

export default App;
