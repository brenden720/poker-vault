import { FETCH_SETTINGS, FETCH_SETTING } from '../actions/types';

const INITIAL_STATE = {
  location_type: { values: [], isActive: false },
  limit_type: { values: [], isActive: false },
  stake: { values: [], isActive: false },
  location: { values: [], isActive: false },
  tournament_type: { values: [], isActive: false },
  game: { values: [], isActive: false },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SETTINGS:
      return { ...state };
    case FETCH_SETTING:
      if (typeof action.payload === 'string') {
        return {
          ...state,
          location_type: {
            ...state.location_type,
            isActive: false,
          },
          limit_type: {
            ...state.limit_type,
            isActive: false,
          },
          stake: {
            ...state.stake,
            isActive: false,
          },
          location: {
            ...state.location,
            isActive: false,
          },
          tournament_type: {
            ...state.tournament_type,
            isActive: false,
          },
          game: {
            ...state.game,
            isActive: false,
          },
          [action.payload]: {
            ...state[action.payload],
            isActive: true,
          },
        };
      } else {
        const settingType = Object.keys(action.payload[0])[0];
        const settings = action.payload.map(value => {
          return value[settingType];
        });
        return {
          ...state,
          location_type: {
            ...state.location_type,
            isActive: false,
          },
          limit_type: {
            ...state.limit_type,
            isActive: false,
          },
          stake: {
            ...state.stake,
            isActive: false,
          },
          location: {
            ...state.location,
            isActive: false,
          },
          tournament_type: {
            ...state.tournament_type,
            isActive: false,
          },
          game: {
            ...state.game,
            isActive: false,
          },
          [settingType]: {
            ...state[settingType],
            values: settings,
            isActive: true,
          },
        };
      }
    default:
      return state;
  }
};
