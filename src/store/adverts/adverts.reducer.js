import {
  ADD_ADVERT,
  DELETE_ADVERT,
  GET_ADVERTS,
  SAVE_ADVERT_TAGS,
} from "./adverts.actions";
import initialState from "./adverts.state";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ADVERTS:
      return {
        ...state,
        adverts: payload,
      };
    case SAVE_ADVERT_TAGS:
      return {
        ...state,
        tags: payload,
      };
    case ADD_ADVERT:
      return {
        ...state,
        adverts: [...state.adverts, payload],
      };
    case DELETE_ADVERT:
      const updatedAdverts = state.adverts.filter(({ id }) => id !== payload);
      return {
        ...state,
        adverts: updatedAdverts,
      };
    default:
      return state;
  }
};
