const Router = require('express').Router()
const controllers = require('../2_controllers/employees')

Router.get('/api/employees', controllers.getAllDataEmployees)
Router.get('/api/employees/:id', controllers.getDataEmployeesById)
Router.post('/api/employees', controllers.createEmployees)
Router.put('/api/employees/:id', controllers.updateEmployees)
Router.delete('/api/employees/:id', controllers.deleteEmployees)

Router.post('/api/reverse', controllers.countReverse)
Router.post('/api/fibonacci', controllers.countFibonacci)
Router.post('/api/combination', controllers.countCombination)




module.exports = Router





