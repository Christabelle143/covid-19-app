import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

const rootStore = combineReducers({
  countries: countriesReducer,
  loadingBar: loadingBarReducer,
});

const store = configureStore({
  reducer: rootStore,
}, applyMiddleware(thunk));

export default store;
