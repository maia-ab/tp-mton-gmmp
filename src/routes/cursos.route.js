const {Router} = require('express')
const cursosController = require('../controllers/cursos.controller')
const route = Router()

route.get('/cursos', cursosController.getAllCursos)    
route.get('/cursos/:id', cursosController.cursoById)  
route.delete('/cursos/:id', cursosController.deleteCursoById)
route.put('/cursos/:id', cursosController.putCursoById)

module.exports = route