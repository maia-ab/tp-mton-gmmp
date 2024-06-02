const {Router} = require('express')
const {Materia, Cursos} = require('../db/models')
const materiaController = require('../controllers/materia.controller')
const middlewareMateria = require('../middlewares/middlewares')
const cursosSchema = require('../schemas/cursos.schemas')

const route = Router()

route.get('/materias', materiaController.getAllMaterias)
route.get('/materias/:id', middlewareMateria.existsById(Materia), materiaController.materiaById)
route.delete('/materias/:id', middlewareMateria.existsById(Materia),middlewareMateria.existeRelacionConRegistro(Materia, Cursos), materiaController.deleteMateriaById)
route.post('/materias/:id/curso', middlewareMateria.existsById(Materia), middlewareMateria.validaSchema(cursosSchema), materiaController.crearCursoEnMateriaById)
route.get('/materias/:id/cursos', middlewareMateria.existsById(Materia), materiaController.getCursosEnMateriaById)
module.exports = route
