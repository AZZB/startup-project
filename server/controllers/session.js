import jwt from 'jsonwebtoken';
import User from '../models/User';
import * as UserQuery from '../models/query/user';
import  * as UserController  from './user';
import * as PermissionQuery from '../models/query/permission';
import { sendEmailVerificationLink } from '../mailer';
import { SECRET_KEY_AUTH, jwtConfig } from '../config';
import { serverErrorMessage } from '../utils/messages';
import * as AuthMessages from '../utils/messages/auth';
import { userData } from '../models/serializer/user';




export const login = (app) => (req, res) => {

  const { username, password } = req.body;

  /**
    here the username can be email because we have one field for username or email on the client side login
  */

  (async () => {
    try {

      let { user, field } = await UserQuery.findByUsernameOrEmail(username, username);

      if(!user) return res.status(400).json(AuthMessages.userNotFound());

      const isMatch = await user.checkPassword(password);
      if(!isMatch) return res.status(400).json(AuthMessages.wrongPassword());

      if(!user.isVerified) return res.json(AuthMessages.emailLinkVerficationNeeded());

      const token = jwt.sign(user, app.get(SECRET_KEY_AUTH), jwtConfig);

      res.json(AuthMessages.loginSuccess(token, userData(user)));

    } catch (e) {
      console.log('error at login: ', e);
      return res.status(500).json(serverErrorMessage());
    }
  })();

};



export const signUp = (app) => (req, res) => {

  const { username, email } = req.body;

  (async () => {
    try {

      let {user, field} = await UserQuery.findByUsernameOrEmail(username, email);
      if(user) return res.status(400).json(AuthMessages.fieldAlreadyExist(field));

      const permission = await PermissionQuery.save();
      const result = await UserQuery.save(req.body, permission);

      const token = jwt.sign(result, app.get(SECRET_KEY_AUTH), jwtConfig);

      process.nextTick(() => {
        sendEmailVerificationLink(result, token);
      });

      res.json(AuthMessages.successRegistration());

    } catch (e) {
      console.log(e);
      let errors = UserController.handleErrors(e);
      if(errors !== {}) return res.json({ success: false, errors, message: 'errors data'});

      res.status(500).json(serverErrorMessage());
    }
  })();

}



export const checkAuth = (app) => (req, res, next) => {
   const token = req.body.token || req.query.token || req.headers['x-access-token'];
   if(token) {
     jwt.verify(token, app.get(SECRET_KEY_AUTH), (err, decoded) => {
       // console.log(decoded);
       if(err || !decoded) return res.json(AuthMessages.failedAuthToken());
       req.decoded = decoded;

       next();
     });
   } else {
     return res.status(403).send(AuthMessages.noTokenProvided());
   }
}


export const loginWithToken = (req, res) => {
  const { _doc } = req.decoded;

  (async () => {
    const user = await UserQuery.findByIdAndUsername(_doc._id, _doc.username);
    if(!user) return res.status(400).json(AuthMessages.userNotFound());
    res.json(AuthMessages.loginWithTokenSuccess(userData(user)));
  })();

}


export const verifyemail = (app) => (req, res) => {
  const token = req.params.token;
  if(token) {
    jwt.verify(token, app.get(SECRET_KEY_AUTH), (err, decoded) => {
      const { _doc } = decoded;

      if(err || !decoded) {
        console.log(err);
        return res.json(AuthMessages.invalidLinkEmailVerification());
      }

      (async () => {
        try {
          const user = await UserQuery.findByIdAndUsername(_doc._id, _doc.username);

          if(!user) return res.json(AuthMessages.invalidLinkEmailVerification());

          if(user.isVerified === true) return res.json(AuthMessages.userAlreadyVerfied());

          user.isVerified = true;
          await UserQuery.update(user);

          return res.json(AuthMessages.successEmailVerification());

        } catch (e) {
          console.log(e);
          return res.status(500).send(serverErrorMessage());
        }
      })();

    });
  }
}



export const forgotPassword = (app) => (req, res) => {
  const { email } = req.body;

  (async () => {
    try {
      const user = await UserQuery.findByEmail(email);
      if(!user) return res.json({ success: false, message: 'email does not exist'});
      /*
        TODO: send link to the email
      */
    } catch (e) {
      console.log(e);
      res.status(500).json(serverErrorMessage());
    }
  })();
}



export const resendVerificationEmail = (app) => (req, res) => {

}
