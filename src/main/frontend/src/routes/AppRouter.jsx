import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';

export const AppRouter = () => {
    return (
        <Switch>
            {Object.keys(routes).map((route) => (
                <Route key={route} {...routes[route]} />
            ))}
        </Switch>
    );
};
