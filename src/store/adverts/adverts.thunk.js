import {
  ADD_ADVERT,
  DELETE_ADVERT,
  GET_ADVERTS,
  SAVE_ADVERT_TAGS,
} from "./adverts.actions";
import {
  addAdvertToServer,
  deleteAdvertFromServer,
  getAdvertTagsFromServer,
  getAllAdverts,
} from "../../utils/api/adverts";
import { isEmpty } from "../../utils/common/functions";

export const fetchAdverts = () => async (dispatch) => {
  try {
    const adverts_request = await getAllAdverts();
    const { adverts } = adverts_request;

    if (!isEmpty(adverts)) {
      dispatch({ type: GET_ADVERTS, payload: adverts });
    }

    const tags = await getAdvertTagsFromServer();
    if (tags.valid) {
      dispatch({ type: SAVE_ADVERT_TAGS, payload: tags.data });
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};

export const addAdvert = (advertData) => async (dispatch) => {
  try {
    const { valid } = await addAdvertToServer(advertData);

    if (valid) {
      dispatch({ type: ADD_ADVERT, payload: advertData });
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};

export const deleteAdvert = (id) => async (dispatch) => {
  try {
    const { valid } = await deleteAdvertFromServer({ id });

    if (valid) {
      dispatch({ type: DELETE_ADVERT, payload: id });
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};
