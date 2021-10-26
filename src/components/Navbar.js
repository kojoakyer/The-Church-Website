import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {


    const [click, setClick]= useState(false)
    // const [button, setButton] = useState(true)
    const [dropdown, setDropdown] = useState(false)

    function handleClick(){
       setClick(!click)
   }

   function onMouseEnter(){
       if(window.innerWidth < 900){
           setDropdown(true)
       }else{
           setDropdown(true)
       }
   }

   function onMouseLeave(){
    if(window.innerWidth < 900){
        setDropdown(false)
    }else{
        setDropdown(false)
    }
   }

   function closeMobileMenu(){
       setClick(false)
   }
   


  return (
    <>
      <nav className="navbar">
          <div className="navbar-container container">
              <Link className='navbar-logo'>
                  <img src="images/TCIT Website logo-1.png" id='logo' alt="" className='photo' />
                 {/* TCIT|<div className="navbar-title_name">The Church in Tema</div>  */}
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className= {click ? 'fas fa-times': 'fas fa-bars'}/>
              </div>
              <ul className={click?'nav-menu active':'nav-menu'}>
                  <li className="nav-item" onClick={closeMobileMenu}>
                      <Link to='/' className="nav-links">
                          Home
                      </Link>
                  </li>
                  <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMobileMenu} >
                      <Link className="nav-links" to='/'>
                          Messages <i  className= 'fas fa-caret-down'/>
                      </Link>
                      {dropdown && <Dropdown />}
                  </li>
                  <li className="nav-item" onClick={closeMobileMenu}>
                      <Link to='/Gallery' className="nav-links">
                          Gallery
                      </Link>
                  </li>
                  <li className="nav-item" onClick={closeMobileMenu}>
                      <Link to='/AboutUs' className="nav-links">
                          About us
                      </Link>
                  </li>
                  <li className="nav-item">
                      <div className="navSearch">
                            <input className='nav-input' type="text" placeholder='Search..'/>
                            <button className='Search-btn'><i className='fas fa-search'/></button>
                      </div>
                  </li>
              </ul>
              {/* {button && <Button buttonStyle='btn--outline'>Sign-up</Button>} */}

          </div>
      </nav>
    </>
  )
}

export default Navbar
