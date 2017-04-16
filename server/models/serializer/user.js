import { permissionData } from './permission';


export const userData = (user) => {
  const {
    _id, username, email, fullName, bio,
    createdAt, avatar, lastLogin,
    gender,
  } = user;

  const permission = permissionData(user.permission);

  return {
    id: _id,
    username,
    email,
    fullName,
    bio,
    createdAt,
    lastLogin,
    gender,
    permission,
  };
}
