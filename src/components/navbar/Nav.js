import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/states" className="link">States</Link>
                    </li>
                    <li>
                    <Link to="/effect" className="link">Effect</Link>
                    </li>
                    <li>
                        <Link to="/map" className="link">Map</Link>
                    </li>
                    <li>
                        <Link to="/hooks" className="link">Hooks</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav