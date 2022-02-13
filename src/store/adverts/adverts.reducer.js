import {
  ADD_ADVERT_SUCCESS,
  DELETE_ADVERT_SUCCESS,
  GET_ADVERTS_SUCCESS,
  GET_ADVERT_TAGS_SUCCESS,
} from "./adverts.actions";
import initialState from "./adverts.state";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ADVERTS_SUCCESS:
      return {
        ...state,
        adverts: payload,
      };
    case GET_ADVERT_TAGS_SUCCESS:
      return {
        ...state,
        tags: payload,
      };
    case ADD_ADVERT_SUCCESS:
      return {
        ...state,
        adverts: [...state.adverts, payload],
      };
    case DELETE_ADVERT_SUCCESS:
      const updatedAdverts = state.adverts.filter(({ id }) => id !== payload);
      return {
        ...state,
        adverts: updatedAdverts,
      };
    default:
      return state;
  }
};
