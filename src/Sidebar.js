import React, { useState, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

import './Sidebar.css'

function Sidebar (props) {
  const [value, setValue] = useState('Restaurants')
  const throttled = useRef(throttle((nextState) => props.getCoord(nextState), 2000, {
    leading: false,
    trailing: true
  }))

  useEffect(() => throttled.current(value), [value])
  // https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook

  return (
    <div className="container">
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        value={value}
        className="search"
        type="text"
      />
      <table cellPadding="10">
        <tbody>
          {props.features && props.features.map(
            (item, index) => (
              <tr
                onMouseEnter={() => props.setItem({...item, index})}
                onMouseLeave={() => props.setItem(null)}
                className="text-xs-center"
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
