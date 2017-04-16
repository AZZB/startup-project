import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Field } from 'redux-form';
import CustomField from '../common/CustomField';
import RaisedButton from 'material-ui/RaisedButton';
import { Prompt } from 'react-router-dom';
import CardContainer from '../common/styles/CardContainer';


const SignUp = (props) => {
  console.log('SignUp props: ', props);
  const {handleSubmit, submitting, pristine, reset, anyTouched} = props;

  return (
    <CardContainer >
      <Grid centered>
        <Grid.Column mobile={14} tablet={8} computer={8}>
          <Form className="attached fluid " onSubmit={handleSubmit} loading={submitting}>
            <Field name="username" component={CustomField} placeholder="Username" type="text" />
            <Field name="email" component={CustomField} placeholder="Email" type="email" />
            <Field name="password" component={CustomField} placeholder="Password" type="password" />
            <Field name="confirm" component={CustomField} placeholder="Confirm password" type="password" />
            <RaisedButton type="submit" disabled={submitting || pristine} primary={true} style={{color: '#fff'}}>SIGN UP</RaisedButton>
          </Form>
        </Grid.Column>
      </Grid>

      <Prompt when={anyTouched && !submitting} message="data will be lost!" />
    </CardContainer>
  );
}



export default SignUp;
