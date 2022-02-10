import { SAVE_TOKEN, SAVE_USER } from "./auth.actions";
import initialState from "./auth.state";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_TOKEN:
      return { ...state, token: payload };
    case SAVE_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
