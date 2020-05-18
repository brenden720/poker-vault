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
  DELETE_SETTING,
  DELETE_SESSION,
} from './types';

export const signIn = (payload) => {
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

export const fetchSession = () => async (dispatch) => {
  const response = await pages.get('api//sessions/:id');
  dispatch({ type: FETCH_SESSION, payload: { session: response.data } });
};

export const fetchSettings = () => {
  return {
    type: FETCH_SETTINGS,
  };
};

export const fetchSetting = (setting) => {
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

export const createSetting = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const { settings } = getState();
    let activeSetting = '';

    for (let key in settings) {
      if (settings[key].isActive) {
        key += 's';
        activeSetting = key;
      }
    }

    const activeSettingParsed = activeSetting.replace(/_/g, '-').slice(0, -1);

    const response = await pages.post(
      `api/settings/${userId}/${activeSetting}`,
      { ...formValues }
    );

    dispatch({ type: CREATE_SETTING, payload: response.data });
    history.push(`/sessions/settings/${activeSettingParsed}`);
  };
};

export const createCashSession = (formValues) => {
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

export const deleteSetting = (tableName, setting) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;

    await pages.delete(`api/settings/${userId}/${tableName}`, {
      data: { setting },
    });

    const currentState = getState().settings;
    const stateSetting = tableName
      .replace(/-/g, '_')
      .substring(0, tableName.length - 1);

    dispatch({
      type: DELETE_SETTING,
      payload: [currentState[stateSetting], stateSetting, setting],
    });
  };
};

export const deleteSession = (sessionId) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    await pages.delete(`api/cash/${userId}/${sessionId}`);

    dispatch({
      type: DELETE_SESSION,
      payload: sessionId,
    });
  };
};
