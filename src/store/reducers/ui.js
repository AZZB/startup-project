import { TOGGLE_DRAWER, SHOW_MESSAGE, SET_PROFILE_SPINNER } from '../actions/ui';

const initialState = {
  isDrawerOpen: false,
  profileSpinner: false,
};

function ui(state = initialState, action) {
  switch (action.type) {

    case TOGGLE_DRAWER: {
      return Object.assign({}, state, { isDrawerOpen: !state.isDrawerOpen});
    }

    case SHOW_MESSAGE: {
      return state;
    }

    case SET_PROFILE_SPINNER: {
      return {...state, ...{ profileSpinner: action.visible }}
    }

    default:
      return state;
  }

}

export default ui;
