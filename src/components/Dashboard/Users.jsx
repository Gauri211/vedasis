import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';
import { FaArrowUpAZ, FaArrowDownZA } from "react-icons/fa6";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState({ column: '', order: '' });

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

  // Sort the users based on selected column and order
  const handleSort = (column) => {
    const newOrder =
      sortOrder.column === column && sortOrder.order === 'asc' ? 'desc' : 'asc';
    setSortOrder({ column, order: newOrder });

    const sortedUsers = [...users].sort((a, b) => {
      if (a[column] < b[column]) return newOrder === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return newOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
  };

  // Filter the users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle pagination (calculate the rows to display for the current page)
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-table">
      <div className="users-nav">
        <div className="search">
          <input
            type="text"
            placeholder="Search for influencer"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
    <p>Click once on title of any column to sort it in ascending. Click twice to sort in descending.</p>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                Name
                {sortOrder.column === 'name' && sortOrder.order === 'asc' ? (
                  <FaArrowUpAZ className='upbtn'/>
                ) : sortOrder.column === 'name' && sortOrder.order === 'desc' ? (
                  <FaArrowDownZA className='downbtn'/>
                ) : null}
              </th>
              <th onClick={() => handleSort('username')}>
                Username
                {sortOrder.column === 'username' && sortOrder.order === 'asc' ? (
                  <FaArrowUpAZ className='upbtn'/>
                ) : sortOrder.column === 'username' && sortOrder.order === 'desc' ? (
                  <FaArrowDownZA className='downbtn'/>
                ) : null}
              </th>
              <th onClick={() => handleSort('email')}>
                Email
                {sortOrder.column === 'email' && sortOrder.order === 'asc' ? (
                  <FaArrowUpAZ className='upbtn'/>
                ) : sortOrder.column === 'email' && sortOrder.order === 'desc' ? (
                  <FaArrowDownZA className='downbtn'/>
                ) : null}
              </th>
              <th onClick={() => handleSort('website')}>
                Website
                {sortOrder.column === 'website' && sortOrder.order === 'asc' ? (
                  <FaArrowUpAZ className='upbtn'/>
                ) : sortOrder.column === 'website' && sortOrder.order === 'desc' ? (
                  <FaArrowDownZA className='downbtn'/>
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
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

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredUsers.length / rowsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
