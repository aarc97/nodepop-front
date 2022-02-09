import React, { createContext } from 'react';

import useSession from '../hooks/useSession.hooks';

const UserContext = createContext();

const SessionContext = ({ children }) => {
  const { storeUserSession, removeUserSession, getUserSession, currentUser } =
    useSession();

  return (
    <UserContext.Provider
      value={{
        state: { currentUser },
        actions: { storeUserSession, removeUserSession, getUserSession },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default SessionContext;
export { UserContext };
