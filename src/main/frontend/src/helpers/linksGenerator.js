import { generatePath } from 'react-router-dom';
import { routes } from '../routes';

export const getMovieLinkById = (id) => generatePath(routes.Movie.path, { id });

export const getRandomUsername = async () => {
    const response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
        const data = (await response.json()).results[0];
        return `${data.name.first} ${data.name.last}`;
    }
    return 'Joe Fore';
};
