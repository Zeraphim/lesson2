import React from 'react'

// importing the useState hook
import { useState } from "react";

import Component1 from "./Component1";

import "./hookstyles.css"

function Hooks() {
  // using the useState hook to create a state variable for user chosen color
  const [name, setName] = useState("Walter White");

  return (
    <div className="hooks">

      <h2>New Text: {name}</h2>

      <div className="button-container">
        <button onClick={() => setName("Walter White")}>Walter White</button>
        <button onClick={() => setName("Daenerys Targaryen")}>Daenerys Targaryen</button>
        <button onClick={() => setName("Geralt of Rivia")}>Geralt or Rivia</button>
        <button onClick={() => setName("Paul Atreides")}>Paul Atreides</button>
        <button onClick={() => setName("Chandler Bing")}>Chandler Bing</button>
      </div>

      <div className="components-div">
        {/* Passing the state variable to Component1, component 1 passes the variable up to component 3*/}
        <Component1 name={name}/>
      </div>

    </div>
  )
}

export default Hooks