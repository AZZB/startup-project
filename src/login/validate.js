import { isEmpty, minLength } from '../utils/validations';



const validate = values => {
  const { username, password } = values;
  const errors = {};

  if(isEmpty(username)) errors.username = 'Required';

  if(isEmpty(password)) errors.password = 'Required';

  return errors;
}



export default validate;
