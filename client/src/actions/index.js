import pages from '../apis/pages';
import { FETCH_SESSIONS, FETCH_SESSION, SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchSessions = () => async (dispatch) => {
  const response = await pages.get('/sessions');

  dispatch({ type: FETCH_SESSIONS, payload: { session: response.data } });
};

export const fetchSession = () => async (dispatch) => {
  const response = await pages.get('/sessions/:id');

  dispatch({ type: FETCH_SESSION, payload: { session: response.data } });
};
