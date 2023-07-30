// UserTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';
import { HiArrowPath, HiOutlineArrowDownTray } from 'react-icons/hi2'
import { BiFilter } from 'react-icons/bi'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-table">
      <div className='users-nav'>
        <div style={{display: 'flex'}}>
      <div className='users-tabs'>
        <ul class="horizontal-list">
          <li class="blue-gradient">Users</li>
          <li>Campaign</li>
          <li>Tables</li>
          <li>List</li>
        </ul>
      </div>
      <div>
        <HiArrowPath style={{fontSize: '30px', margin: 20, cursor: 'pointer'}}/>
      </div>
      <button className='download-btn'><HiOutlineArrowDownTray />  Download</button>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for influencer"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className='search-btn'>Search</button>
        <BiFilter style={{ color: '#444444', margin: '20', cursor: 'pointer' }} size={'70px'}/>
      </div>
      </div>
      
      <div className='table-div'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id} style={{ backgroundColor: index % 2 !== 0 ? '#fff' : '#f5f5f5' }}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>
    </div>
  );
};

export default Users;
