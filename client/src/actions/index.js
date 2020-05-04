import pages from '../apis/pages';
import { FETCH_SESSIONS } from './types';

export const fetchSessions = () => async (dispatch) => {
  const response = await pages.get('/sessions');

  dispatch({ type: FETCH_SESSIONS, payload: { session: response.data } });
};

export const fetchSession = () => async (dispatch) => {
  const response = await pages.get('/sessions/:id');

  dispatch({ type: FETCH_SESSION, payload: { session: response.data } });
};
