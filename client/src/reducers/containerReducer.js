import { SET_DASHBOARD, SET_SETTINGS } from '../actions/types';

const INITIAL_STATE = {
  dashboard: false,
  settings: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DASHBOARD:
      return { ...state, dashboard: true, settings: false };
    case SET_SETTINGS:
      return { ...state, settings: true, dashboard: false };
    default:
      return state;
  }
};
