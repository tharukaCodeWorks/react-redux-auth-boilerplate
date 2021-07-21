import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './User';
import appSettings from './AppSettings';
const reducer = combineReducers({
  user,
  appSettings
})
/* eslint-disable no-underscore-dangle */
const store = configureStore({
  reducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
/* eslint-enable */
export default store;