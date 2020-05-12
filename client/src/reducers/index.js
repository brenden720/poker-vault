import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';
import authReducer from './authReducer';
import settingReducer from './settingReducer';
import containerReducer from './containerReducer';
import { SIGN_OUT } from '../actions/types';

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  sessions: sessionReducer,
  settings: settingReducer,
  container: containerReducer,
});

export default (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
