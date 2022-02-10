import { ADD_ADVERTS, DELETE_ADVERTS, GET_ADVERTS } from "./adverts.actions";
import initialState from "./adverts.state";

const getAdverts = (state, payload) => {
  return {
    ...state,
    adverts: payload,
  };
};

const addAdverts = (state, payload) => {
  return {
    ...state,
    adverts: [...state.adverts, payload],
  };
};

const deleteAdverts = (state, payload) => {
  const updatedAdverts = state.adverts.filter(({ id }) => id !== payload.id);
  return {
    ...state,
    adverts: updatedAdverts,
  };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ADVERTS:
      return getAdverts(state, payload);
    case ADD_ADVERTS:
      return addAdverts(state, payload);
    case DELETE_ADVERTS:
      return deleteAdverts(state, payload);
    default:
      return state;
  }
};
