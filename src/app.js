import express from 'express';

import routes from './router';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // middleware para utilizar formato json no express
  middlewares() {
    this.server.use(express.json());
  }

  // utiliza rotas
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
