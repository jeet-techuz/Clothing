import { USER_ACTION_TYPE } from "./user-type";
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SIGN_IN_SUCESS:
      return { ...state, currentUser: payload };

    case USER_ACTION_TYPE.SIGN_IN_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};
