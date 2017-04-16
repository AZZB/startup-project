import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from './Drawer';
import { logoutRequest } from '../store/actions/auth';

const DrawerContainer = (props) => {
  return (
    <Drawer open={props.isDrawerOpen} logged={props.logged}/>
  );
}



const mapStateToProps = (state) => ({
  isDrawerOpen: state.ui.isDrawerOpen,
  logged: (state.auth.currentUser != null),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ logoutRequest }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
