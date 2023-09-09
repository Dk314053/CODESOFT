import React from 'react'
import {NavLink} from "react-router-dom";

import './Navbar.css'



const Navbar = () => {

  const data=[ 
    {
   navOption:'Home',
   path:"/"

  },
  {
    navOption:'About',
    path:'/about'
  },
  {
    navOption:'Contact',
    path:'/contact'
  },
 
]

  
  return (
    <>
    <nav >
  
 <ul className='maincontainer'>
  {
    data.map((Data)=>
    <li style={{listStyleType:"none"}}>
    <NavLink to={Data.path}>{Data.navOption}</NavLink>
  </li>)
  }
  {/* here we are using map method to show data which were stored in object in the form of array to print in list */}

 </ul>
 </nav>
 

 </>
 
  )
}

export default Navbar