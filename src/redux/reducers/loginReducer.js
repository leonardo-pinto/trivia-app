import { LOGIN } from '../actions/loginActions';

const initialState = {
  username: '',
  email: '',
  gravatarImage: '',
  token: '',
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default loginReducer;
