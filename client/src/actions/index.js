import pages from '../apis/pages';
import { FETCH_SESSIONS } from './types';

export const fetchSessions = () => async (dispatch) => {
  const response = await pages.get('#');

  dispatch({ type: FETCH_SESSIONS, payload: { session: response.data } });
};
