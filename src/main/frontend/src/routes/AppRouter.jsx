import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from './routes';
import { GeneralErrorPage, NotFoundPage } from '../pages';

export const AppRouter = () => {
    return (
        <Switch>
            {Object.keys(routes).map((route) => (
                <Route key={route} {...routes[route]} />
            ))}
            <Route component={GeneralErrorPage} exact={true} path={'/5xx'} />
            <Route component={NotFoundPage} exact={true} path={'/4xx'} />
            <Redirect to="/4xx" />
        </Switch>
    );
};
