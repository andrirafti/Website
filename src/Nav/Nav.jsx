import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import "./Log.css"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  //Below is for the HAMBURGER MENU//
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
    
  }

  return (
    
<nav style={{ width: '100%', position: 'fixed', background: '#8C92AC' }} className="navBar">
      <h1 style={{ textAlign: 'center',fontSize:'25px' }}>
      <FontAwesomeIcon icon="user"/>
       Andri Rafti
       </h1>

        
     
      <hr></hr>
      <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose  className="close" style={{ color: "black", width: "30px", height: "30px" }} />
    ) : (
      <FiMenu className="open" style={{ color: "black",marginBottom:'20px' }} />
      )}
       
      </button>
      

      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} ><Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '70px', marginLeft: '40px' }} to="/">
        
        <FontAwesomeIcon style={{ marginRight: '5px' }} icon="home" />
        Home
        
        </Link>
        <Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '20px', marginLeft: '40px', paddingRight: '0px' }} to="/Projects">
          <FontAwesomeIcon style={{marginRight:'5px'}} icon="clipboard" />
          My Projects 
           </Link>
           <Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '20px', marginLeft: '40px', paddingRight: '0px' }} to="/Contact">
          <FontAwesomeIcon style={{marginRight:'5px'}} icon="envelope" />
          Contact Me 
           </Link>
           <Link onClick={() => closeMenu()} style={{ color: 'black', marginTop: '20px', marginLeft: '40px', paddingRight: '0px' }} to="/Experience">
          <FontAwesomeIcon style={{ marginRight: '5px' }} icon="file" />   
Resume
     </Link>
</ul>
      


      


      {/* <Link className="login"to='/Experience'> Experience</Link>
      <Link className="login"to='/Projects'> My Projects</Link>
    <Link className="login" to='/'>About Me </Link> */}
      {/* <Link className="login" to='/Certification'>Certification</Link> */}
      {/* <Link className="login" to='/Contact'>Contact Me</Link> */}
      
    </nav>
  )
}

export default Nav
