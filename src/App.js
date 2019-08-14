import React, { useState } from 'react';
// import axios from 'axios';

import MapContainer from './MapContainer'
import Sidebar from './Sidebar'

import './App.css';

function App() {
  const coord = useState([-0.481747846041145, 51.3233379650232])

  const getCoord = v => {
    console.log(v)
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
