import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';
import { toggleDrawer } from '../store/actions/ui';
import { logoutRequest } from '../store/actions/auth';


const NavBarContainer = (props) => {
  const { toggleDrawer, logoutRequest, logged } = props;

  return (
    <NavBar toggleDrawer={toggleDrawer} logged={logged} logoutRequest={logoutRequest}/>
  );
}


const mapStateToProps = (state) => ({
  logged: (state.auth.currentUser != null),
});


const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ toggleDrawer, logoutRequest }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
