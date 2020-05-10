import { FETCH_SETTINGS, FETCH_SETTING } from '../actions/types';

const INITIAL_STATE = {
  location_type: [],
  limit_type: [],
  stake: [],
  location: [],
  tournament_type: [],
  game: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SETTINGS:
      return { ...state };
    case FETCH_SETTING:
      // modify this
      return { ...state };
    default:
      return state;
  }
};
