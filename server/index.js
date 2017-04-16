
const bodyParser = require('body-parser');

import apiRouter from './routes';
import { SECRET_KEY_AUTH, SECRET_KEY_AUTH_VALUE } from './config';
import { login, signUp, checkAuth, verifyemail, forgotPassword, resendVerificationEmail } from './controllers/session';



module.exports =  function (app) {

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.set(SECRET_KEY_AUTH, SECRET_KEY_AUTH_VALUE);


  app.post('/login', login(app));
  app.post('/signup', signUp(app));
  app.get('/verifyemail/:token', verifyemail(app));
  app.post('/resendVerificationEmail', resendVerificationEmail(app));
  app.post('/forgotpassword', forgotPassword(app));

  app.use('/api', apiRouter(app));


}
