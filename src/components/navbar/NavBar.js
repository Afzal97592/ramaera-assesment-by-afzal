import React, { useState } from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';



const NavBar = () => {

  const[active, setActive] = useState(false)

  return (
  <div className='navbarContainer'
  //  sx={{
  //   dispaly:{lg:'flex', xs:'flex'},
  //   gap:{xs:5}
  // }}
  >
     <div className='logo'
     >
      <img src={require('../../images/logo.png')} alt='logo' className='logo' />
     </div>
     <div className='navbar'>
      <button className='menu-icon' onClick={()=>setActive(!active)}>
        {active? <CloseIcon/> : <MenuIcon />}
      </button>
       <ul className={active? "nav-menu active" : "nav-menu"}>
        <li onClick={()=>setActive(!active)} >Home</li>
        <li onClick={()=>setActive(!active)}>Our Industries</li>
        <li onClick={()=>setActive(!active)}>Our Companies</li>
        <li onClick={()=>setActive(!active)}>Career</li>
        <li onClick={()=>setActive(!active)}>Contacts</li>
        {/* <li><SearchIcon style={{fontSize:37}} /></li> */}
       </ul>
     </div>
  </div>

  )
}

export default NavBar