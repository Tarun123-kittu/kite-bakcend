import React, { useState } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { authSelector ,  } from '../../app/features/Auth/authSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useSelector , useDispatch} from 'react-redux';
const Sidebar = () => {
  const {toggleActive} = useSelector(
    authSelector
);
const [active, setActive]= useState('false')

const handleclick = () =>{
  if (document.body.classList.contains('body_toggle')) {
    document.body.classList.remove('body_toggle');
}else{
  document.body.classList.add('body_toggle');
}
  setActive(!active)
}

  return (
    <div className={active ? 'sidebar_outer' : "sidebar_outer toggle"}
    // onMouseEnter={() => setActive(true)}
    // onMouseLeave={() => setActive(false)}
    >
    <div className= "sidebar_inner">
      <div className='site_logo '>
      <span className='logo_icon'><img src="assets/images/logo_glyp.png" alt="" /></span> <span className='logo_text'><img src="assets/images/logo_text.png" alt="" srcSet="" /></span>
       <FontAwesomeIcon 
       onClick={handleclick}
     
       icon={faBars}/>
      </div>
    <ul>
 
        <li>
            <NavLink  to='/home' ><div className='nav_icon'><FontAwesomeIcon icon={faLaptop} /></div><span className='ml-2'>Home</span></NavLink >
      
        </li>
        <li>
          <NavLink to="/userlist"><div className='nav_icon'><FontAwesomeIcon icon={faUser} /></div><span className='ml-2'>User</span></NavLink >
        </li>
        <li>
            <NavLink to="/reports"><div className='nav_icon'><FontAwesomeIcon icon={faFile} /></div><span className='ml-2'>Reports</span></NavLink >
        </li>
        <li>
            <NavLink to="/abstract"><div className='nav_icon'><FontAwesomeIcon icon={faClone} /></div><span className='ml-2'>Abstract</span></NavLink >
        </li>
        <li>
            <NavLink to="/calculater"><div className='nav_icon'><FontAwesomeIcon icon={faCalculator} /></div><span className='ml-2'>Calculater</span></NavLink >
        </li>
    </ul>
    
    </div>
    </div>
  )
}

export default Sidebar