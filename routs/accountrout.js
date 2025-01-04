const express = require('express')
const openaccount = require('../controller/accountcontroller.js')

const Router = express.Router()

Router.post('/register',openaccount)

module.exports = Router;