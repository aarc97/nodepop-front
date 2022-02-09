import { useState } from 'react';

import {
  storeSession,
  removeSession,
  getSession,
} from '../utils/storage/user_session';

const useSession = () => {
  const currentSession = getSession();
  const [currentUser, setCurrentUser] = useState(currentSession);

  const storeUserSession = async ({ email, token }) => {
    storeSession(email, token);
    setCurrentUser({ email, token });
  };

  const removeUserSession = async () => {
    await removeSession();
    setCurrentUser({});
  };

  const getUserSession = async () => {
    const { email, token } = getSession();
    return { email, token };
    //setCurrentUser({ email, token });
  };

  return {
    storeUserSession,
    removeUserSession,
    getUserSession,
    currentUser,
  };
};
export default useSession;
