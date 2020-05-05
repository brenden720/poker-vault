import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import authReducer from './authReducer';

export default combineReducers({
  sessions: sessionReducer,
  auth: authReducer,
});
