import { LOGIN_USER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.key) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};
