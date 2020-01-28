import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import routes from './routes';

// database initialize
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('tiny'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
