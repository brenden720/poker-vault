import _ from 'lodash';
import {
  FETCH_SESSIONS,
  FETCH_SESSION,
  CREATE_CASH_SESSION,
  DELETE_SESSION,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return { ...state, ...action.payload };
    case FETCH_SESSION:
      return { ...state };
    case CREATE_CASH_SESSION:
      return { ...state };
    case DELETE_SESSION:
      let result = {};
      for (let key in state) {
        if (state[key].id !== action.payload) {
          result[key] = { id: state[key].id };
        }
      }
      return result;
    default:
      return state;
  }
};
