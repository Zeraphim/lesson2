import React from 'react'

// importing the useState hook
import { useState } from "react";

import "./statestyles.css"

function States() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  return (
    <div className="content" style={{ backgroundColor: color }}>
      

      <h2>Change the bg color using React States</h2>
      <h3>Current Color: {color}</h3>

      <div className="button-container">
        <button onClick={() => setColor("white")}>White</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("cyan")}>Cyan</button>
        <button onClick={() => setColor("teal")}>Teal</button>
      </div>

    </div>
  )
}

export default States