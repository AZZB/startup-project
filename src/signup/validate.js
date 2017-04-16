import { isEmpty, notEmail, minLength } from '../utils/validations';


const validate = values => {
  const { username, email, password, confirm } = values;
  const errors = {};

  if(isEmpty(username)) errors.username = 'Required';
  if(minLength(3)(username)) errors.username = 'Must be 3 characters or more';

  if(isEmpty(email)) errors.email = 'Required';
  if(notEmail(email)) errors.email = 'Must be  a valide email';

  if(isEmpty(password)) errors.password = 'Required';
  if(minLength(4)(password)) errors.password = 'Must be 4 characters or more';

  if(confirm !== password) errors.confirm = 'Must be the same of password';

  return errors;
}


export default validate;
