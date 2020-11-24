import { generatePath } from 'react-router-dom';
import { routes } from '../routes';

export const getMovieLinkById = (id) => generatePath(routes.Movie.path, { id });
