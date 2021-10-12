import { LOGIN } from '../actions/loginActions';

const initialState = {
  user: '',
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
      };
    default:
      return state;
  }
};

export default loginReducer;
