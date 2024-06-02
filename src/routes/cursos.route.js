const {Router} = require('express')
const {Cursos, Profesores} = require('../db/models')
const cursosController = require('../controllers/cursos.controller')
const middlewareCursos = require('../middlewares/middlewares')
const route = Router()

route.get('/cursos', cursosController.getAllCursos)    
route.get('/cursos/:id', middlewareCursos.existsById(Cursos), cursosController.cursoById)  
route.delete('/cursos/:id', middlewareCursos.existsById(Cursos), middlewareCursos.existeRelacionConRegistro(Cursos, Profesores), cursosController.deleteCursoById)
route.put('/cursos/:id', middlewareCursos.existsById(Cursos), cursosController.putCursoById)
route.post('/cursos/:id/profesores', middlewareCursos.existsById(Cursos), cursosController.asociarProfesores)
route.get('/cursos/:id/profesores', middlewareCursos.existsById(Cursos), cursosController.getProfesoresEnCursoById)

module.exports = route