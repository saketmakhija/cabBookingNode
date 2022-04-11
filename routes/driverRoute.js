const app = require('express')
const driverRouter = app.Router()
const driverController = require('../controllers/driverController')

driverRouter.get('/details',driverController.details);
driverRouter.post('/add-driver',driverController.addDriver);

module.exports = driverRouter;