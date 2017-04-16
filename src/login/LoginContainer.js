import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import Login from './Login';
import { fetchDataStart, loginRequest } from '../store/actions/auth';
import validate from './validate';


const LoginContainer = (props) => {
  const {handleSubmit, loginRequest} = props;
  
  function submit(values) {
    return new Promise((resolve, reject) => {
      loginRequest(values, {resolve, reject});
    });
  }

  return (
    <Login {...props} handleSubmit={handleSubmit(submit)} />
  );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchDataStart, loginRequest }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'login', validate})(LoginContainer));
