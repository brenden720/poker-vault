import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';
import authReducer from './authReducer';
import settingReducer from './settingReducer';
import containerReducer from './containerReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  sessions: sessionReducer,
  settings: settingReducer,
  container: containerReducer,
});
