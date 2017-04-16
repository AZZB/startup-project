import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Main from './Main';




const MainContainer = (props) => {
  return (
    <Main {...props} />
  );
}


const mapStateToProps = (state) => (
  {
    currentUser: state.auth.currentUser,
  }
);


const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer));
