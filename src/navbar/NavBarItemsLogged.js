import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import profileImage from '../assets/images/profile.png';
import '../assets/styles/badge.css';

const NavBarItemsLogged = (props) => {

  const { logoutRequest } = props;

  return (
    <ul className="nav-items">
      <li><span className="badge" ><a href="#">Notification</a></span></li>
      <li><a href="#">Discover</a></li>
      <li className="nav-items-avatar" >
        <IconMenu
          iconButtonElement={<IconButton> <Avatar src={profileImage} size={50} /> </IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Invite Friends</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={() => logoutRequest()}>Logout</MenuItem>
        </IconMenu>
      </li>
    </ul>
  );
}


export default NavBarItemsLogged;
