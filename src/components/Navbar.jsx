import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">VASUDEV <span>YADAV</span></div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projact</li>
        <li>Certification</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar