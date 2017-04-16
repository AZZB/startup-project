
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const showMessage = message => ({
  type: SHOW_MESSAGE,
  payload: {
    message,
  }
});


export const SET_PROFILE_SPINNER = 'SET_PROFILE_SPINNER';
export const setProfileSpinner = visible => ({
  type: SET_PROFILE_SPINNER,
  visible,
});
