const {Router} = require('express')
const cursosController = require('../controllers/cursos.controller')
const route = Router()

route.get('/cursos', cursosController.getAllCursos )    
route.get('/cursos/:id', cursosController.cursosById )  
route.delete('/cursos/:id', cursosController.deleteCursosById)
route.put('/cursos/:id', cursosController.putCursoById)

module.exports = route