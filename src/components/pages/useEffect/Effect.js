import React from 'react'

// importing the useState hook and useEffect
import { useState, useEffect } from "react";

import "./effectstyles.css"

function Effect() {
  // using the useState hook to create a state variable for user chosen color
  const [counter, setCounter] = useState(0);
  const [counterIncrement, setCounterIncrement] = useState(1);

  // This useEffect will not reset the increment value
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter((count) => count + counterIncrement);
  //   }, 1000);
  // });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((count) => count + counterIncrement);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts or the counter state changes
    return () => clearTimeout(timer);
  }, [counter, counterIncrement]); // Adding counter and counterIncrement as dependencies


  return (
    <div className="content">

      <h1>Counter: {counter}</h1>
      <h2>UseEffect Hooks for dynamic counter</h2>
      <h3>Current Counter Increment: {counterIncrement}</h3>

      <div className="button-container">
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounterIncrement(1)}>1</button>
        <button onClick={() => setCounterIncrement(10)}>10</button>
        <button onClick={() => setCounterIncrement(50)}>50</button>
        <button onClick={() => setCounterIncrement(100)}>100</button>
      </div>

    </div>
  )
}

export default Effect