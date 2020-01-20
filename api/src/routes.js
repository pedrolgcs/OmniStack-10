import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';

const routes = new Router();

/* index api router */
routes.get('/', (req, res) => res.json({ message: 'Enjoy the silenc' }));

/* devs */
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

/* search */
routes.get('/search', SearchController.index);

export default routes;
