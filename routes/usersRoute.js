const route = require('express').Router()
const Controller = require('../controllers/UserController')

route.get('/', Controller.home)

module.exports = route