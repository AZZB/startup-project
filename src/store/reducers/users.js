import { ADD_USER } from '../actions/user';

const initialState = {

};

function users(state = initialState, {type, user}) {
  switch (type) {
    case ADD_USER:
      return Object.assign(
        {},
        initialState,
        {
          [user.username]: user,
        }
      );

    default:
      return state;
  }

}


export default users;
