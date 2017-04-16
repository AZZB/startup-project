const router = require('express').Router();

import { index, show, update } from '../controllers/user';


router.get('/', index);
router.get('/user/:id', show);
router.post('/user/update/:id', update);


export default router;
