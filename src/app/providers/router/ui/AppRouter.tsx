import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { CheckUserRights } from 'app/providers/router/ui/CheckUserRights';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        const isCheckRequired = route.authOnly || route.roles;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    isCheckRequired ? (
                        <CheckUserRights routeRoles={route.roles}>
                            {element}
                        </CheckUserRights>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
