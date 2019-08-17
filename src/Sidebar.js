import React, { useState, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

import './Sidebar.css'

function Sidebar (props) {
  const [value, setValue] = useState('Palm Beach Gardens')
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
        value={value}
        className="search"
        type="text"
        label="Search"
      />
      <table cellPadding="10">
        <tbody>
          {props.features && props.features.map(
            (item, i) => (<tr className="text-xs-center" key={`item-${i}`}>
                <td>{item.place_name}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Sidebar
