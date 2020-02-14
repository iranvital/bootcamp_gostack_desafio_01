const express = require('express');
const routes = require('./routes');

const requestCount = require('./middlewares/requestCount');

class App {

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
   this.server.use(express.json());
   this.server.use(requestCount);
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;