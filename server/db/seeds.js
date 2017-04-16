import User from '../models/User';
import { save as saveUser} from '../models/query/user';
import { save as savePermission } from '../models/query/permission';


export default function run() {
  console.log('[----------- running the seeds --------------] ');
  let user = new User(users[0]);

  (async () => {
    try {
      await User.remove({});
      const permission = await savePermission({admin: true, full: true});
      await saveUser(user, permission);
      console.log('user saved');
    } catch (e) {
      console.log(e);
    }

  })();
}


const users = [
  {
    username: 'admin',
    email: 'admin@hotmail.com',
    password: 'admin',
    isVerified: true,
  }
];
