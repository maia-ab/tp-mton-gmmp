const {Router} = require('express')
const carrerasController = require('../controllers/carreras.controller')
const route = Router()

route.get('/carreras', carrerasController.getAllCarreras )
route.get('/carreras/:id', carrerasController.carreraById )
route.post('/carreras', carrerasController.crearCarrera)
module.exports = route