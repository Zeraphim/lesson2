import React from 'react'
import Component3 from "./Component3";

function Component2({ name }) {
  return (
    <div className="comp-card">

      <h2>Component 2</h2>
      <Component3 name={name} />

    </div>
  )
}

export default Component2