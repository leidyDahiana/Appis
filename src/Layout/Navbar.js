import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <div>
        
    <nav>
        <ul>
            <li><Link to="/Main" class="link1">Main</Link></li>
            <li><Link  to="/Healp" class="link2">help</Link></li>
            <li><Link to="/Footer" class="link3">contact</Link></li>
        </ul>
    </nav>

    </div>
    </>
  )
}
