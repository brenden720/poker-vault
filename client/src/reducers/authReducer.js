import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  fullName: null,
  email: null,
};

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isSignedIn: true, userId: action.payload };
//     case SIGN_OUT:
//       return { ...state, isSignedIn: false, userId: null };
//     default:
//       return state;
//   }
// };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { userId, fullName, email } = action.payload;
      return { ...state, isSignedIn: true, userId, fullName, email };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        fullName: null,
        email: null,
      };
    default:
      return state;
  }
};
