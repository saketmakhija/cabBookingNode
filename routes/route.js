const app = require('express')
const driverRouter = require('./driverRoute')
const route = app.Router();

route.use('/driver', driverRouter)

module.exports = route;