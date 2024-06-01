const {Router} = require('express')
const {Carreras} = require('../db/models')
const carrerasController = require('../controllers/carreras.controller')
const middlewareCarreras = require('../middlewares/middlewares') 
const carrerasSchema = require('../schemas/carreras.schemas')
const materiaSchema = require('../schemas/materia.schemas')
const route = Router();

route.get('/carreras', carrerasController.getAllCarreras)
route.get('/carreras/:id', middlewareCarreras.existsById(Carreras), carrerasController.carreraById)
route.post('/carreras', middlewareCarreras.validaSchema(carrerasSchema), carrerasController.crearCarrera)
route.post('/carreras/:id/materia', middlewareCarreras.existsById(Carreras), middlewareCarreras.validaSchema(materiaSchema), carrerasController.crearMateriaEnCarreraById)
route.get('/carreras/:id/materias', middlewareCarreras.existsById(Carreras), carrerasController.getMateriasDeCarreraById)

module.exports = route