import pages from '../apis/pages';
import history from '../history';
import {
  FETCH_SESSIONS,
  FETCH_SESSION,
  SIGN_IN,
  SIGN_OUT,
  CREATE_CASH_SESSION,
} from './types';

export const signIn = payload => {
  return {
    type: SIGN_IN,
    payload,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchSessions = () => async dispatch => {
  const response = await pages.get('api//sessions');

  dispatch({ type: FETCH_SESSIONS, payload: { session: response.data } });
};

export const fetchSession = () => async dispatch => {
  const response = await pages.get('api//sessions/:id');

  dispatch({ type: FETCH_SESSION, payload: { session: response.data } });
};

export const createUser = () => {
  return async (dispatch, getState) => {
    const { userId, fullName, email } = getState().auth;
    await pages.post(`/api/user/${userId}/${fullName}/${email}`);
  };
};

export const createCashSession = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await pages.post(`/api/cash/${userId}`, {
      ...formValues,
      userId,
    });

    dispatch({ type: CREATE_CASH_SESSION, payload: response.data });
    history.push('/sessions/cash/all');
  };
};
