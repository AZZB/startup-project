import * as UserQuery from '../models/query/user';
import { userData } from '../models/serializer/user';
import { serverErrorMessage } from '../utils/messages';
import * as AuthMessages from '../utils/messages/auth';
import * as UserMessages from '../utils/messages/user';


export const index = (req, res) => {
  (async () => {
    try {
      const users = await UserQuery.findAll();
      const json = users.map(user => userData(user));
      res.json(json);
    } catch (e) {
      console.log(e);
      res.status(500).json(serverErrorMessage());
    }
  })();
};


export const show = (req, res) => {
  const { id } = req.params;
  (async () => {
    try {
      const user = await UserQuery.findById(id);
      if(!user) return res.status(400).json(UserMessages.userNotFound('id', id))
      res.json(userData(user));
    } catch (e) {
      console.log(e);
      res.status(500).json(serverErrorMessage());
    }
  })();
};


export const showByUsername = (req, res) => {
  const { username } = req.params;

  (async () => {
    try {
      const user = await UserQuery.findByUsername(username);
      if(!user) return res.status(400).json(UserMessages.userNotFound('username', username))
      res.json(userData(user));
    } catch (e) {
      console.log(e);
      res.status(500).json(serverErrorMessage());
    }
  })();
}


export const update = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  (async () => {
    try {
      const user = await UserQuery.findById(id);
      if(!user) return res.status(400).json(AuthMessages.userNotFound());

      const { existUser, field } = await UserQuery.findByUsernameOrEmail(username, email);
      if(existUser) return res.status(400).json(AuthMessages.fieldAlreadyExist(field));



    } catch (e) {
      console.log(e);
      res.status(500).json(serverErrorMessage());
    }
  })();
};


export const handleErrors = ({errors}) => {
  let _errors = {};
  if(errors.username) _errors['username'] = errors.username.message;
  if(errors.email) _errors['email'] = errors.email.message;
  if(errors.password) _errors['password'] = errors.password.message;

  return _errors;
}
