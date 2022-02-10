import { userLogin } from "../../utils/api/user";
import { storeSession } from "../../utils/storage/user_session";
import { SAVE_USER } from "./auth.actions";

export const onLogin =
  ({ user, onError, navigate }) =>
  async (dispatch) => {
    try {
      onError("");
      const { email, password, remember } = user;

      const userLoginResponse = await userLogin(email, password);
      const { valid, message, token } = userLoginResponse;

      if (valid) {
        if (remember) {
          storeSession(email, token);
        }
        dispatch({ type: SAVE_USER, payload: { email, token } });
        navigate("/adverts");
        return;
      }

      onError(message);
    } catch (error) {
      console.log("fetchAdverts error", error);
    }
  };
