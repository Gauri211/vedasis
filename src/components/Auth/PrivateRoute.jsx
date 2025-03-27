import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");

  // If no user in localStorage, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the child route (Details page)
  return <Outlet />;
};

export default PrivateRoute;
