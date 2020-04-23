"use strict";

var client = require('../controller/clientController');

var clientRoutes = function clientRoutes(app) {
  app.get('/clients', client.index);
  app.get('/clients/:id', client.find);
  app.post('/clients', client.post);
  app.put('/clients/:id', client.put);
  app["delete"]('/clients/:id', client["delete"]);
};

module.exports = clientRoutes;