import { Router } from 'express';

import DevController from './app/controllers/DevController';

const routes = new Router();

/* index api router */
routes.get('/', (req, res) => res.json({ message: 'Enjoy the silenc' }));

/* devs */
routes.post('/devs', DevController.store);

export default routes;
