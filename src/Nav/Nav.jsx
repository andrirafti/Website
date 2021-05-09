import React from 'react'
import { Link } from 'react-router-dom'
import "./Log.css"

const Nav = () => {
  return (
    <div className="nav">
      <Link className="login"to='/Experience'> Experience</Link>
      <Link className="login"to='/Projects'> My Projects</Link>
      <Link className="login" to='/'>About Me </Link>
      <Link className="login" to='/Certification'>Certification</Link>
      
    </div>
  )
}

export default Nav
