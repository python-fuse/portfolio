import React from 'react'
import './components.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>PY-FUSE</h1>
      <nav className='nav'>
        <a>Home</a>
        <a>About</a>
        <a>Skills</a>
        <a>Services</a>
        <a>Testimonials</a>
        <a>Contact</a>
      </nav>
    </div>
  )
}

export default Header
