

export const ADD_USER = 'ADD_USER';
export const  addUser = (user) => ({
  type: ADD_USER,
  user,
});


export const GET_USER_USERNAME_REQUEST = 'GET_USER_REQUEST';
export const getUserByUsernameRequest = (username) => ({
  type: GET_USER_USERNAME_REQUEST,
  username,
});

export const GET_USER_USERNAME_SUCCESS = 'GET_USER_USERNAME_SUCCESS';
export const getUserByUsernameSuccess = (user) => ({
  type: GET_USER_USERNAME_SUCCESS,
  user,
});

export const GET_USER_USERNAME_FAILED = 'GET_USER_USERNAME_FAILED';
export const getUserByUsernameFailed = (errors) => ({
  type: GET_USER_USERNAME_FAILED,
  errors,
});
