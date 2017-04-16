import User from '../User';
import * as PermissionQuery from './permission';



export const create = (data) => {
  return User.create(data);
}

export const save = (user, permission) => {
  const newUser = (user instanceof User)? user : new User(user);
  newUser.permission = permission;

  return newUser.save();
}


export const update = (user) => {
  return user.save();
}

export const findAll = () => {
  return User.find({}).populate('permission').exec();
}

export const findById = (id) => {
  return User.findById(id).populate('permission').exec();
}

export const findByIdAndUsername = (_id, username) => {
  return User.findOne({_id, username}).populate('permission').exec();
}

export const findByUsername = (username) => {
  return User.findOne({ username }).populate('permission').exec();
}


export const findByEmail = (email) => {
  return User.findOne({ email }).populate('permission').exec();
}



export const findByUsernameOrEmail =  (username, email) => {
  return new Promise((resolve, reject) => {
    let user;
    (async () => {
      try {
        // user = await Promise.race([findByUsername(username), findByEmail(email)]);
        // console.log('race: ', user);
        // user = null;
        user = await findByUsername(username);
        if(user) resolve({ user, field: 'username' });

        user = await findByEmail(email);
        if(user) resolve({ user, field: 'email' });

        resolve({});
      } catch (e) {
        reject(e);
      }
    })();

  });
}



export const findWithSelect = (selector) => {
  return User.find({}, selector);
}


export const populate = (query, ...fields) => {
  const selector = fields.join(' ');

  return query.populate(selector).exec();
}
