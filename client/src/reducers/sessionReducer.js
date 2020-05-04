import { FETCH_SESSIONS, FETCH_SESSION } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return { ...state };
    case FETCH_SESSION:
      return { ...state };
    default:
      return state;
  }
};
