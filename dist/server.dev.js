"use strict";

/* Dependencies */
var express = require('express');
/* Start App */


var app = express();
/* JSON */

app.use(express.json());
/* Routes */

var routes = require('./src/routes/clientRoutes')(app);
/* Initialization Server */


app.listen(3000, function () {
  console.log('server is running');
});