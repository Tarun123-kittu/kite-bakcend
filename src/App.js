import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from "react-router-dom";
import Login from './components/Auth/login';
import Forgot from './components/Auth/forgot';
import Reports from './components/Reports/reports';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';
import Home from './components/MainContent/home';
import Profile from './components/Profile/profile';
import ChangePassword from './components/Profile/changePassword';
import Userlist from './components/users/userlist';
import Adduser from './components/users/adduser';
import Updateuser from './components/users/updateuser';
import { VerifyAuth } from './middlewares/AuthVerify';

function App() {
  return (

    <Router>
     
     <Routes>
      <Route path="/" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/userlist" element={<VerifyAuth><Sidebar/><Header/><Userlist /></VerifyAuth>} />
        <Route exact path="/home" element={<VerifyAuth><Sidebar/><Header/><Home/></VerifyAuth>} />
        <Route exact path="/reports" element={<VerifyAuth><Sidebar/><Header/><Reports /></VerifyAuth>} />
        <Route exact path="/profile" element={<VerifyAuth><Sidebar/><Header/><Profile /></VerifyAuth>} />
        <Route exact path="/changePassword" element={<VerifyAuth><Sidebar/><Header/><ChangePassword /></VerifyAuth>} />
        <Route exact path="/addUser" element={<VerifyAuth><Sidebar/><Header/><Adduser /></VerifyAuth>} />
        <Route exact path="/updateUser/:id" element={<VerifyAuth><Sidebar/><Header/><Updateuser /></VerifyAuth>} />

    
    </Routes>
   
 </Router>
    // <Login />
  );
}

export default App;
