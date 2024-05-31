const {Router} = require('express')
const profesoresController = require('../controllers/profesores.controller')
const route = Router()

route.get('/profesores', profesoresController.getAllProfesores)
route.get('/profesores/:id', profesoresController.profesorById)
route.post('/profesores', profesoresController.crearProfesor)
route.put('/profesores/:id', profesoresController.actualizarProfesor)
route.delete('/profesores/:id', profesoresController.eliminarProfesor)

module.exports = route