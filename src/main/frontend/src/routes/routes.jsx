import * as Pages from '../pages';

export const routes = {
    Home: {
        path: '/',
        exact: true,
        component: Pages.HomePage,
    },
    Movies: {
        path: '/movies',
        exact: true,
        component: Pages.MoviesPage,
    },
};
