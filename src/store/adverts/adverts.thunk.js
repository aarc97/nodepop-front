import {
  addAdvertSuccess,
  ADD_ADVERT_SUCCESS,
  deleteAdvertSuccess,
  DELETE_ADVERT_SUCCESS,
  getAdvertsSuccess,
  getAdvertsTagsSuccess,
  GET_ADVERTS_SUCCESS,
  GET_ADVERT_TAGS_SUCCESS,
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
      dispatch(getAdvertsSuccess(adverts));
    }

    getAdvertsTags()(dispatch);
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};

export const getAdvertsTags = () => async (dispatch) => {
  try {
    const tags = await getAdvertTagsFromServer();
    if (tags.valid) {
      return dispatch(getAdvertsTagsSuccess(tags.data));
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};

export const addAdvert = (advertData) => async (dispatch) => {
  try {
    const { valid } = await addAdvertToServer(advertData);

    if (valid) {
      dispatch(addAdvertSuccess(advertData));
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};

export const deleteAdvert = (id) => async (dispatch) => {
  try {
    const { valid } = await deleteAdvertFromServer({ id });

    if (valid) {
      dispatch(deleteAdvertSuccess(id));
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};
