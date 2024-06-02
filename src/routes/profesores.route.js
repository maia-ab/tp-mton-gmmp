const {Router} = require('express')
const {Profesores, Cursos} = require('../db/models')
const profesoresController = require('../controllers/profesores.controller')
const middlewareProfesores = require('../middlewares/middlewares')
const profesoresSchema = require('../schemas/profesores.schemas')

const route = Router()

route.get('/profesores', profesoresController.getAllProfesores)
route.get('/profesores/:id', middlewareProfesores.existsById(Profesores), profesoresController.profesorById)
route.post('/profesores', middlewareProfesores.validaSchema(profesoresSchema), profesoresController.crearProfesor)
route.put('/profesores/:id', middlewareProfesores.existsById(Profesores), profesoresController.actualizarProfesor)
route.delete('/profesores/:id', middlewareProfesores.existsById(Profesores), middlewareProfesores.existeRelacionConRegistro(Profesores, Cursos), profesoresController.eliminarProfesor)
route.get('/profesores/:id/cursos', middlewareProfesores.existsById(Profesores), profesoresController.getCursosEnProfesoresById)

module.exports = route