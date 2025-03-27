// App.js
import React from 'react';
import logo from '../../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
import Users from './Users';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  if (!email) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <nav className="menu" tabIndex="0">
	<div className="smartphone-menu-trigger"></div>
  <header className="avatar">
		<img alt="logo" src={logo} />
    <h2>Algo Root</h2>
  </header>
	<ul>
    <li tabIndex="0" className="icon-dashboard"><span>Details</span></li>
    <li tabIndex="0" className="icon-customers"><span>Customers</span></li>
    <li tabIndex="0" className="icon-users"><span>Users</span></li>
    <li tabIndex="0" className="icon-settings"><span>Settings</span></li>
  </ul>
</nav>

<main>
     <div className="main-content">
        <Navbar />
        <div className="content">
          <Users />
        </div>
      </div>
</main>
    </div>
  );
};

export default Dashboard;
