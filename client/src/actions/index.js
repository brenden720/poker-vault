import pages from '../apis/pages';
import history from '../history';
import {
  SET_DASHBOARD,
  SET_SETTINGS,
  FETCH_SESSIONS,
  FETCH_SESSION,
  FETCH_SETTINGS,
  FETCH_SETTING,
  SIGN_IN,
  SIGN_OUT,
  CREATE_CASH_SESSION,
  CREATE_SETTING,
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

export const setDashboard = () => {
  return {
    type: SET_DASHBOARD,
  };
};

export const setSettings = () => {
  return {
    type: SET_SETTINGS,
  };
};

export const fetchSessions = () => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await pages.get(`api/cash/${userId}/cash_sessions`);
    dispatch({ type: FETCH_SESSIONS, payload: response.data });
  };
};

export const fetchSession = () => async dispatch => {
  const response = await pages.get('api//sessions/:id');
  dispatch({ type: FETCH_SESSION, payload: { session: response.data } });
};

export const fetchSettings = () => {
  return {
    type: FETCH_SETTINGS,
  };
};

export const fetchSetting = setting => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await pages.get(`api/settings/${userId}/${setting}`);
    let submittedData = null;

    if (response.data.length) {
      submittedData = response.data;
    } else {
      submittedData = setting.substring(0, setting.length - 1);
    }
    dispatch({ type: FETCH_SETTING, payload: submittedData });
  };
};

export const createUser = () => {
  return async (dispatch, getState) => {
    const { userId, fullName, email } = getState().auth;
    await pages.post(`/api/user/${userId}/${fullName}/${email}`);
  };
};

export const createSetting = formValues => {
  console.log('formVals: ', formValues);
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const { settings } = getState();
    let activeSetting = '';
    for (let keys in settings) {
      if (settings[keys].isActive) {
        activeSetting = keys += 's';
      }
    }
    let activeSettingParsed = activeSetting.replace(/_/g, '-').slice(0, -1);
    console.log(activeSettingParsed);

    const response = await pages.post(
      `api/settings/${userId}/${activeSetting}`,
      { ...formValues },
    );

    dispatch({ type: CREATE_SETTING, payload: response.data });
    history.push(`/sessions/settings/${activeSettingParsed}`);
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
