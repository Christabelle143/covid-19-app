import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import countriesReducer from './redux/countries/countries';

const rootStore = combineReducers({
  countries: countriesReducer,
  loadingBar: loadingBarReducer,
});

const store = configureStore({
  reducer: rootStore,
}, applyMiddleware(thunk));

function render(
  ui,
  {
    ...renderOptions
  } = {},
) {
  function Wrapper(children) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export default render;
