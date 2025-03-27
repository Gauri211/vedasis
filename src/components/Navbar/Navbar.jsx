import React, { useState } from 'react';
import './Navbar.css';
import { BiChevronDown } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';  // To redirect users after logout

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();  // React Router to handle redirects

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  // Handle logout functionality
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('email');

    // Optionally, redirect the user to the login page
    navigate('/login'); // Adjust the route accordingly
  };

  // Handle delete account functionality
  const handleDeleteAccount = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');

    // Optionally, redirect the user to a landing page or the login page
    navigate('/login'); // Adjust the route accordingly
  };

  return (
    <div className='nav-profile'>
      <div className="user-info">
        <div className='user-photo'>
          <h2>{(user?.username[0]).toUpperCase()}</h2>
        </div>
        <BiChevronDown size={'30px'} style={{ cursor: 'pointer' }} color='black' onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="user-details">
              <p><strong>{user?.name}</strong></p>
              <p>{user?.email}</p>
            </div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
