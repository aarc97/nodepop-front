import { Outlet, Navigate, useLocation } from "react-router-dom";
import useSession from "../hooks/useSession.hooks";
import { isEmpty } from "../utils/common/functions";

const ProtectedRoute = () => {
  const location = useLocation();
  const { currentUser } = useSession();

  if (isEmpty(currentUser)) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet from={location} />;
};

export default ProtectedRoute;
