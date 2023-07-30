// Navbar.js
import React from 'react';
import './Navbar.css';
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='nav-profile'>
      <div className="user-info">
        <img
          className="user-photo"
          src="https://via.placeholder.com/60"
          alt="User"
        />
        <div>
          <h2>ChethanB</h2>
          <p style={{color: 'grey', margin: 0}}>Brand</p>
        </div>
        <BiChevronDown size={'30px'}/>
      </div>
    </div>
  );
};

export default Navbar;
