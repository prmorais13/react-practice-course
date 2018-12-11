import { LOGIN_USER, REGISTER_USER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.key) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};
