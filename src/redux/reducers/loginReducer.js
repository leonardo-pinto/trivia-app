import { LOGIN } from '../actions/loginActions';

const initialState = {
  user: '',
  email: '',
  gravatarImage: '',
  token: '',
  error: '',
};

const loginReducer = (state = initialState, action) => {
  console.log('login reducer');
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
