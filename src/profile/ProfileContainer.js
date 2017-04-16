import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './Profile';
import { getUserByUsernameRequest } from '../store/actions/user';




const ProfileContainer = (props) => {
  console.log('profile: ', props);
  const { match, getUserByUsernameRequest, showSpinner } = props;

  return (
    <Profile  showSpinner={showSpinner} />
  );
}


const mapStateToProps = (state) => ({
  showSpinner: state.ui.profileSpinner,
});




export default connect(mapStateToProps)(ProfileContainer);
