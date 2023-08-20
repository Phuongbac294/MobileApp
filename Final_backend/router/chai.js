const express = require('express');
const controler = require('../model/chai.model')

const chai = express.Router();

chai.get('/', controler.get())

module.exports = chai;