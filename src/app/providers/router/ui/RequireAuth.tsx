import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
   children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  if (!auth) {
    return (
      <Navigate to={routePath.main} state={{ from: location }} replace />
    );
  }

  return children;
};

export default RequireAuth;
