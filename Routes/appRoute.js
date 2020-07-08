'use strict'

var express = require('express');
var appController = require('../controller/appController');
var api = express.Router();

api.post('/', appController.guardar);

module.exports = api;