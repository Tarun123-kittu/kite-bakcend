import React,{useState} from 'react'
import './style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/sidebar';  
import { authSelector , toggle } from '../../app/features/Auth/authSlice';
import {useSelector , useDispatch} from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';
const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleClick = () => {
    // setIsActive(current => !current);
    // dispatch(toggle({isActive}));
    localStorage.clear();
    navigation("/");
  };

  return (
    
    <div className='content_outer p-0'>
      <div className='content p-0'>
      <header className="header_outer">
    
 
    <div className='right_content'>
    <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
             <img src="assets/images/user.svg" alt="" />
       </Dropdown.Toggle>
 
       <Dropdown.Menu>
         <Dropdown.Item><Link to="/profile"> My Profile</Link> </Dropdown.Item>
         <Dropdown.Item><Link to="/changePassword"> Change Password</Link></Dropdown.Item>
         <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown> 
    </div>
    </header>
      </div>
    </div>
  )
}

export default Header