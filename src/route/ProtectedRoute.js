import React from "react";
import { Redirect, Route } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

function ProtectedRoute({ children, ...rest }) {
  const { user } = UserAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
