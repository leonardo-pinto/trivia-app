import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import rootReducer from '../redux/reducers/rootReducer';

export const getStore = (initialState) => {
  if (!initialState) return createStore(rootReducer, applyMiddleware(thunk));
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export const renderWithRouterAndRedux = (component, routeConfigs = {}, initialState) => {
  const route = routeConfigs.route || '/';
  const store = getStore(initialState);
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};
