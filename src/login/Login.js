import React from 'react';
import { Button, Form, Grid, Icon} from 'semantic-ui-react';
import { Field } from 'redux-form';
import CustomField from '../common/CustomField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { Prompt } from 'react-router-dom';
import CardContainer from '../common/styles/CardContainer';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {handleSubmit, submitting, pristine, anyTouched} = this.props;
    console.log('logiiin: ', this.props);
    return (
      <CardContainer >
        <Grid centered>
          <Grid.Column mobile={14} tablet={8} computer={5}>
            <Form onSubmit={handleSubmit} loading={submitting}>
                <Field name="username"  component={CustomField} placeholder="Username or Email" type="text" />
                <Field name="password"  component={CustomField} placeholder="Password" type="password" />
                <RaisedButton type="submit" disabled={submitting || pristine} primary={true} style={{color: '#fff'}}>LOGIN</RaisedButton>
            </Form>
          </Grid.Column>
        </Grid>

        <Prompt when={anyTouched} message="data will be lost!" />
      </CardContainer>
    );
  }
}



export default Login;
