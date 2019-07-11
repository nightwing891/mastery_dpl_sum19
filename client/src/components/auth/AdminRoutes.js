import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthConsumer, } from "../../providers/AuthProvider";



const AdminRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    { auth => 
      <Route 
        { ...rest }
        render={ props => (
        auth.authenticated === true && auth.user.admin === true ?
          <Component { ...props } />
        :
          <Redirect 
            to={{
              pathname: "/admins_only",
              state: { from: props.location, },
            }}
          />
        )}
      />
    }
  </AuthConsumer>
)

export default AdminRoute;