import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DrawerItemsLogged from './DrawerItemsLogged';
import DrawerItemsNotLogged from './DrawerItemsNotLogged';


const MDrawer = ({open, logged}) => {

  return (
    <Drawer open={open} containerStyle={{paddingTop: '20px'}}>
      {(logged)? <DrawerItemsLogged /> : <DrawerItemsNotLogged />}
    </Drawer>
  );
}


export default MDrawer;
