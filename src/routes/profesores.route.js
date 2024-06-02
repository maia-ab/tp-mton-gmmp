const {Router} = require('express')
const {Profesores} = require('../db/models')
const profesoresController = require('../controllers/profesores.controller')
const middlewareProfesores = require('../middlewares/middlewares')
const profesoresSchema = require('../schemas/profesores.schemas')
const cursosSchema = require('../schemas/cursos.schemas')
const route = Router()

route.get('/profesores', profesoresController.getAllProfesores)
route.get('/profesores/:id', middlewareProfesores.existsById(Profesores), profesoresController.profesorById)
route.post('/profesores', middlewareProfesores.validaSchema(profesoresSchema), profesoresController.crearProfesor)
route.put('/profesores/:id', middlewareProfesores.existsById(Profesores), profesoresController.actualizarProfesor)
route.delete('/profesores/:id', middlewareProfesores.existsById(Profesores), /*Agregar error 500 */ profesoresController.eliminarProfesor)
route.get('/profesores/:id/cursos', middlewareProfesores.existsById(Profesores), profesoresController.getCursosEnProfesoresById)

module.exports = route