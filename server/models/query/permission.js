import Permission from '../Permission';



export const save = (permission = new Permission()) => {
  const newPermission = (permission instanceof Permission)? permission : new Permission(permission);
  
  return newPermission.save();
}


export const findById = (id) => {
  return Permission.findById(id);
}
