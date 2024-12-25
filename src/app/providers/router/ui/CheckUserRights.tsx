import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CheckUserRightsProps {
  children: JSX.Element;
  routeRoles?: UserRole[];
}

export function CheckUserRights({ children, routeRoles }: CheckUserRightsProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasAccess = !routeRoles?.length
    || routeRoles?.some((role) => userRoles?.includes(role))
    || false;

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasAccess) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
