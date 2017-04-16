import React from 'react';
import { Route, Redirect } from 'react-router-dom';




const NotLoggedRoute = (props) => {
  const { currentUser, component, ...rest } = props;
  console.log('inside NotLoggedRoute: ', currentUser);

  return (
    <Route {...rest} render={(props) => (
      !currentUser? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: "/",
          state: { from: props.location },
        }} />
      )
    ) } />
  );
}


export default NotLoggedRoute;
