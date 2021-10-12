import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import { renderWithRouterAndRedux } from '../utils/renderWithRouterAndRedux';
import store from '../redux/store/store';

const initialState = {
  loginReducer: {
    username: '',
    email: '',
    gravatarImage: '',
    token: '',
    error: '',
  },
};

describe('LoginForm component', () => {
  it('should render correctly', () => {
    renderWithRouterAndRedux(<LoginForm />, { route: '/' }, initialState);
  });

  it('should enable play button if user login input is correct', () => {
    renderWithRouterAndRedux(<LoginForm />, { route: '/' }, initialState);

    const usernameInput = screen.getByTestId('username-input');

    fireEvent.change(usernameInput, { target: { value: 'username test' } });

    const emailInput = screen.getByTestId('email-input');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

    const playButton = screen.getByTestId('btn-play');

    expect(playButton).not.toBeDisabled();
  });
});
