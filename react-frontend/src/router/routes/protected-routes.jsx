import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/helper";
// import { isUserLoggedIn } from "../utils/helper";

const ProtectedRoutes = (props) => {
  const auth = isUserLoggedIn();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
