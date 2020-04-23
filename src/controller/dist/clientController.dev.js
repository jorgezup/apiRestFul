"use strict";

var fs = require('fs');

var data = require('../../data.json');

module.exports = {
  index: function index(req, res) {
    return res.json({
      data: data
    });
  },
  find: function find(req, res) {
    var id = req.params.id;
    var clientFound = data.find(function (client) {
      return client.id == id;
    });
    if (!clientFound) return res.status(204).json();
    var _req$body = req.body,
        name = _req$body.name,
        username = _req$body.username,
        email = _req$body.email,
        address = _req$body.address,
        geo = _req$body.geo;
    return res.json({
      clientFound: clientFound
    });
  },
  post: function post(req, res) {
    var _req$body2 = req.body,
        name = _req$body2.name,
        username = _req$body2.username,
        email = _req$body2.email,
        address = _req$body2.address,
        geo = _req$body2.geo;
    var id = Number(data.length + 1);
    data.push({
      id: id,
      name: name,
      username: username,
      email: email,
      address: address,
      geo: geo
    });
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
      if (err) throw err;
    });
    return res.json({
      data: data
    });
  },
  put: function put(req, res) {
    var id = req.params.id;
    var clientFound = data.find(function (client) {
      return client.id == id;
    });
    if (!clientFound) return res.status(204).json();
    var name = req.body.name;
    clientFound.name = name;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
      if (err) throw err;
    });
    return res.json({
      clientFound: clientFound
    });
  },
  "delete": function _delete(req, res) {
    var id = req.params.id;
    var foundClient = data.find(function (client) {
      return client.id == id;
    });
    var clientsFiltered = data.filter(function (client) {
      return client.id != id;
    });
    /* Client not found */

    if (!foundClient) return res.status(204).json();
    fs.writeFile('data.json', JSON.stringify(clientsFiltered, null, 2), function (err) {
      if (err) throw err;
    });
    return res.json({
      data: data
    });
  }
};