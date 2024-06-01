const {Router} = require('express')
const {Cursos} = require('../db/models/cursos')
const cursosController = require('../controllers/cursos.controller')
const middlewareCursos = require('../middlewares/middlewares')
const route = Router()

route.get('/cursos', cursosController.getAllCursos)    
route.get('/cursos/:id', middlewareCursos.existsById(Cursos), cursosController.cursoById)  
route.delete('/cursos/:id', middlewareCursos.existsById(Cursos),/*Hacer error 500 */ cursosController.deleteCursoById)
route.put('/cursos/:id', middlewareCursos.existsById(Cursos), cursosController.putCursoById)

route.get('/cursos/:id/profesores', middlewareCursos.existsById(Cursos), cursosController.getProfesoresEnCursoById)

module.exports = route