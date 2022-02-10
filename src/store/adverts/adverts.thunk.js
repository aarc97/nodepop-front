import { GET_ADVERTS } from "./adverts.actions";
import { getAllAdverts } from "../../utils/api/adverts";
import { isEmpty } from "../../utils/common/functions";

export const fetchAdverts = () => async (dispatch) => {
  try {
    const adverts_request = await getAllAdverts();
    const { adverts } = adverts_request;

    if (!isEmpty(adverts)) {
      dispatch({ type: GET_ADVERTS, payload: adverts });
    }
  } catch (error) {
    console.log("fetchAdverts error", error);
  }
};
