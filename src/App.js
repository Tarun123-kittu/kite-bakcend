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
import { VerifyType } from './middlewares/typeVerify';
import Abstract from './components/Abstract';
import Calculater from './components/Abstract/calculater';
import Variable from './components/Variable';
import CampaignPage from './components/Campaign';
import Mediaplan from './components/Campaign/mediaplan';
import CompaignName from './components/Campaign/compaignName';
import NewCompaign from './components/Campaign/newCompaign';
import NewLineItem from './components/Campaign/newLineItem';
function App() {
  return (

    <Router>
     
     <Routes>
      <Route path="/" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/userlist" element={<VerifyAuth><VerifyType><Sidebar/><Header/><Userlist /></VerifyType></VerifyAuth>} />
        <Route exact path="/home" element={<VerifyAuth><Sidebar/><Header/><Home/></VerifyAuth>} />
        <Route exact path="/abstract" element={<VerifyAuth><Sidebar/><Header/><Abstract/></VerifyAuth>} />
        <Route exact path="/calculater" element={<VerifyAuth><Sidebar/><Header/><Calculater/></VerifyAuth>} />
        <Route exact path="/reports" element={<VerifyAuth><Sidebar/><Header/><Reports /></VerifyAuth>} />
        <Route exact path="/campaign" element={<VerifyAuth><Sidebar/><Header/><CampaignPage /></VerifyAuth>} />
        <Route exact path="/mediaplan" element={<><Sidebar/><Header/><Mediaplan /></>} />
        <Route exact path="/newCompaign" element={<><Sidebar/><Header/><NewCompaign /></>} />
        <Route exact path="/compaignName" element={<><Sidebar/><Header/><CompaignName /></>} />
        <Route exact path="/newLineItem" element={<><Sidebar/><Header/><NewLineItem /></>} />
        <Route exact path="/variable" element={<VerifyAuth><VerifyType><Sidebar/><Header/><Variable /></VerifyType></VerifyAuth>} />
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
