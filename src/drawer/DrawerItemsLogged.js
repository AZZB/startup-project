import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import profileImage from '../assets/images/profile.png';



const DrawerItemsLogged = (props) => {
  return (
    <div className="drawer-container">
      <MenuItem><Avatar src={profileImage} size={50} /> <span>BENEKA AZZEDDINE</span></MenuItem>
      <Divider />
      <MenuItem>Notification</MenuItem>
      <MenuItem>Discover</MenuItem>
      <Divider />
      <MenuItem>Invite Friends</MenuItem>
      <MenuItem>Settings</MenuItem>
      <Divider />
      <MenuItem>Logout</MenuItem>
    </div>
  );
}


export default DrawerItemsLogged;
