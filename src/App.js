// App.js
import React from 'react';
import './App.css';
import logo from './Assets/logo.png'
import { AiFillHome } from 'react-icons/ai'
import { CgHashtag } from 'react-icons/cg'
import { LuSettings } from 'react-icons/lu'
import Navbar from './components/Navbar/Navbar';
import Users from './components/Dashboard/Users';

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <img src={logo} alt='logo' />
        <AiFillHome className='home-icon'/>
        <CgHashtag className='hash-icon'/>
        <LuSettings className='setting-icon'/>
      </div>
      <div className="main-content">
          <Navbar />
        <div className="content">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default App;
