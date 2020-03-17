import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

import { setupWebsocket } from './services/socket';
import routes from './routes';

// database initialize
import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);

    setupWebsocket(this.server);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan('tiny'));
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
