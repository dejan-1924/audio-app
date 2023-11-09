import React from "react";
import { useContext } from "react";
import { AuthContext } from "../store/auth-store";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

const AuthRoute = (children: any) => {
  const authCtx = useContext(AuthContext);

  if (!authCtx?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
