import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import VerifyToken from "./services/token";

const RouteGuard = () => {
  const auth = JSON.parse(localStorage.getItem("jwt")) || null;

  if (auth) {
    return <Outlet />;
  } else {
    localStorage.clear();
    return <Navigate to="/auth-login" />;
  }
};

export default RouteGuard;
