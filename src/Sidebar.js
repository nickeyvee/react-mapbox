import React, { useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

import Hamburger from './Hamburger'

import './Sidebar.css'

function Sidebar (props) {
  const throttled = useRef(throttle((nextState) => props.getCoord(nextState), 2000, {
    leading: false,
    trailing: true
  }))

  useEffect(() => throttled.current(props.search), [props.search])
  // https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook

  return (
    <div className="container">
      <Hamburger setNav={props.setNav}/>      
      <input
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search"
        value={props.search}
        className="search"
        type="text"
      />
      <table cellPadding="12">
        <tbody>
          {props.features && props.features.map(
            (item, index) => (
              <tr
                onMouseEnter={() => props.setItem({...item, index})}
                onMouseLeave={() => props.setItem(null)}
                className="text-styles"
                key={`item-${index}`}
              >
                <td
                  style={{ fontWeight: 'bold', color: 'red' }}
                >{ props.options[index] }</td>
                <td>{item.text || '- -'}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Sidebar
