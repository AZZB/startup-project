import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import SignUp from './Signup';
import { signupRequest } from '../store/actions/auth';
import validate from './validate';


const SignupContainer = (props) => {

  const { handleSubmit, signupRequest } = props;

  function submit(values) {
    delete values.confirm;
    
    return new Promise((resolve, reject) => {
      signupRequest(values, {resolve, reject});
    });
  }

  return (
    <SignUp {...props}  handleSubmit={handleSubmit(submit)}/>
  );
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signupRequest }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'signup', validate})(SignupContainer));
