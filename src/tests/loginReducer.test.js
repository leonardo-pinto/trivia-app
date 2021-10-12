import loginReducer from '../redux/reducers/loginReducer';
import { login } from '../redux/actions/loginActions';

import '@testing-library/jest-dom';

describe('Login reducer', () => {
  const initialState = {
    username: '',
    email: '',
    gravatarImage: '',
    token: '',
    error: '',
  };

  it('Should return the initial state', () => {
    const newState = loginReducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it('Updates the state with username and email after the action "login" is dispatched', () => {
    const newState = loginReducer(initialState, login({ username: 'username test', email: 'email test' }));

    expect(newState).toEqual({
      username: 'username test',
      email: 'email test',
      gravatarImage: '',
      token: '',
      error: '',
    });
  });
});
