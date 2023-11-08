import React from "react";
import { UserContext } from "../../UserContext";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return login ? children : <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
