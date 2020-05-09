import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  sessions: sessionReducer,
});
