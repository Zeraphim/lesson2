import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// importing the useState hook
import { useState } from "react";

import "./statestyles.css"

function States() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  const notify = () => toast.success('🦄 Wow so easy!', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

  return (
    <div className="content" style={{ backgroundColor: color }}>

      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    
      {/* <h2>Change the bg color using React States</h2> */}
      <h2>THIS IS A NEW TEXT 🤣</h2>
      <h3>Current Color: {color}</h3>

      <div className="button-container">
        <button onClick={notify}>White</button> {/*  () => setColor("white") */}
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("cyan")}>Cyan</button>
        <button onClick={() => setColor("teal")}>Teal</button>
      </div>

    </div>
  )
}

export default States