import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NoMatch from '../error/NoMatch';


const AdminRoute = (props) => {
  const {currentUser, component, ...rest} = props;

  return (
    <Route {...rest}  render={(props) => (
      (currentUser && currentUser.permission.admin)? (
        React.createElement(component, props)
      ) : (
        <NoMatch />
      )
    )}/>
  );
}





export default AdminRoute;
