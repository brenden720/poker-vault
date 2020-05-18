import { SIGN_IN } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  fullName: null,
  email: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { userId, fullName, email } = action.payload;
      return { ...state, isSignedIn: true, userId, fullName, email };
    default:
      return state;
  }
};
