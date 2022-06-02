import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Navbars = () => {
    const [hideNav, setHideNav] = useState(false);

    //  function to toggle subNav
    const hide =()=> {
      setHideNav( hide => {
        return !hide;
      } )
    }
    
    const navigate = useNavigate();
  return (
    <div>
        <nav>
          <h1 onClick={()=> {navigate('/')}} >LOGO</h1>

          <div className= { ` subNav ${hideNav ? 'subNav' : 'hideSubNav'}` }>
          <ul>
            <li onClick={()=> {navigate('/about')}} >ABOUT US</li>
            <li onClick={()=> {navigate('/blog')}} >BLOG</li>
            <li onClick={()=> {navigate('/github')}} >GIT</li>
          </ul>
          <p onClick={()=> {navigate('/contact-us')}} className='contact'>CONTACT US</p>
          </div>
          <FaBars className='faBars' onClick={hide} />
            
        </nav>

    </div>
  )
}

export default Navbars