import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router-dom';


const DrawerItemsNotLogged = (props) => {
  return (
    <div>
      <Link to="/login" ><MenuItem>Login</MenuItem></Link>
      <Link to="/signup" ><MenuItem>Sign up</MenuItem></Link>
    </div>
  );
}


export default DrawerItemsNotLogged;
