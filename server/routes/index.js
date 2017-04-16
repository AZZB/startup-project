import { checkAuth, loginWithToken } from '../controllers/session';
import { showByUsername } from '../controllers/user';
import userRouter from './user';
const router = require('express').Router();



const apiRouter = (app) => {
  router.get('/user/username/:username', showByUsername);

  router.use(checkAuth(app));

  router.use('/users', userRouter);
  router.get('/loginWithToken', loginWithToken);



  return router;
}



export default apiRouter;
