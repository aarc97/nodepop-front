// Actions types
export const GET_ADVERTS_SUCCESS = "adverts/get_adverts_success";
export const GET_ADVERTS_FAIL = "adverts/get_adverts_fail";

export const GET_ADVERT_TAGS_SUCCESS = "adverts/get_advert_tags_success";
export const GET_ADVERT_TAGS_FAIL = "adverts/get_advert_tags_fail";

export const ADD_ADVERT_SUCCESS = "adverts/add_adverts_success";
export const ADD_ADVERT_FAIL = "adverts/add_adverts_fail";

export const DELETE_ADVERT_SUCCESS = "adverts/delete_advert_success";
export const DELETE_ADVERT_FAIL = "adverts/delete_advert_fail";

// Actions
//ACTION CREATORS		export const apiRequestAction = () => ({		    type: API_REQUEST		});
export const getAdvertsSuccess = (adverts) => ({
  type: GET_ADVERTS_SUCCESS,
  payload: adverts,
});

export const getAdvertsFail = (error) => ({
  type: GET_ADVERTS_FAIL,
  payload: error,
});

export const getAdvertsTagsSuccess = (tags) => ({
  type: GET_ADVERT_TAGS_SUCCESS,
  payload: tags,
});

export const getAdvertsTagsFail = (error) => ({
  type: GET_ADVERT_TAGS_FAIL,
  payload: error,
});

export const addAdvertSuccess = (id) => ({
  type: ADD_ADVERT_SUCCESS,
  payload: id,
});

export const addAdvertFail = (error) => ({
  type: ADD_ADVERT_FAIL,
  payload: error,
});

export const deleteAdvertSuccess = (adverts) => ({
  type: DELETE_ADVERT_SUCCESS,
  payload: adverts,
});

export const deleteAdvertFail = (error) => ({
  type: DELETE_ADVERT_FAIL,
  payload: error,
});
