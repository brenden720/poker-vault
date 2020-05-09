import {
  FETCH_SESSIONS,
  FETCH_SESSION,
  CREATE_CASH_SESSION,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return { ...state, ...action.payload };
    case FETCH_SESSION:
      return { ...state };
    case CREATE_CASH_SESSION:
      return { ...state };
    default:
      return state;
  }
};
