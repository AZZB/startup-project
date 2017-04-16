import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileContainer from './ProfileContainer';
import { getUserByUsernameRequest } from '../store/actions/user';


const mapDispatchToProps = (dispatch) => (
  bindActionCreators({getUserByUsernameRequest}, dispatch)
)



export default connect(null, mapDispatchToProps)(function(props) {
  console.log('diiiiiiiiiiiispatch: ', props);
  const { getUserByUsernameRequest, match, ...rest } = props;

  getUserByUsernameRequest(match.params.profile);

  return (
    <ProfileContainer {...rest} />
  );
});
