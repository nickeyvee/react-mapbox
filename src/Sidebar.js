import React from 'react'

import './Sidebar.css';

function Sidebar (props) {
  return (
    <div className="container">
      <div>This is a sidebar</div>
      <input
        onChange={(e) => props.getCoord(e.target.value)}
        className="search"
        type="text"
        label="Search"
      />
    </div>
  )
}

export default Sidebar
