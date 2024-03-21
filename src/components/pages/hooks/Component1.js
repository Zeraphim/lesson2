import React from 'react'

import Component2 from "./Component2"

function Component1({ name }) {
  return (
    <div className="comp-card">

      <h1>Component 1</h1>
      <Component2 name={name} />

    </div>
  )
}

export default Component1