import React from 'react'
import './Hamburger.css'

const Hamburger = (props) => (
  <div className="hamburger" onClick={props.setNav}>
    <div></div>           
    <div></div>           
    <div></div>           
  </div>      
)

export default Hamburger