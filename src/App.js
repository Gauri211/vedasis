// App.js
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import PrivateRoute from './components/Auth/PrivateRoute';
import LoginSignup from './components/Auth/Login';

const App = () => {
  return (
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/details" element={<Dashboard />} />
          </Route>
          <Route path="/" exact element={<Login />} />
        </Routes>
  );
};

export default App;
