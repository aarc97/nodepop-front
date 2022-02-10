import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, SAVE_USER } from "../store/auth/auth.actions";
import { isEmpty } from "../utils/common/functions";

import {
  storeSession,
  removeSession,
  getSession,
} from "../utils/storage/user_session";

const useSession = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const saveUserDispatch = (payload = {}) => dispatch(saveUser(payload));

  const getUser = async () => {
    saveUserDispatch(getSession());
  };

  const storeUserSession = async ({ email, token, remember }) => {
    if (remember) {
      storeSession(email, token);
    }

    saveUserDispatch({ email, token });
  };

  const removeUserSession = async () => {
    removeSession();
    saveUserDispatch();
  };

  useEffect(() => {
    if (isEmpty(currentUser)) {
      getUser();
    }
  }, []);

  return {
    storeUserSession,
    removeUserSession,
    getUserSession: getSession,
    currentUser,
  };
};
export default useSession;
