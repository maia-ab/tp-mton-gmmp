const {Carreras} = require('../db/models')
const {Materia} = require('../db/models')

const controller = {}

const getAllCarreras = async (req, res) => {
    res.status(200).json(await Carreras.findAll({}))
}
controller.getAllCarreras = getAllCarreras

const carreraById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Carreras.findByPk(id))
}

controller.carreraById = carreraById

const crearCarrera = async (req, res) => {
    const carrera = await Carreras.create(req.body)
    res.status(201).json(carrera)
    
}
controller.crearCarrera = crearCarrera

const crearMateriaEnCarreraById = async (req, res) => {
    const id = req.params.id
    const materia = await Materia.create({ ...req.body, carreraId: id})
    const carrera  = await Carreras.findByPk(id)
    const carreraActualizada = await Carreras.findByPk(id, {
        include: { model: Materia, as: 'materias' } 
    });
    
    res.status(201).json(carreraActualizada)
    
}
controller.crearMateriaEnCarreraById = crearMateriaEnCarreraById

const getMateriasDeCarreraById = async (req, res) => {
    const id = req.params.id
    const carrera  = await Carreras.findByPk(id, {
        include: {model: Materia, as: 'materias'}
    })
    const materias = carrera.materias

    res.status(200).json(materias)
    
}
controller.getMateriasDeCarreraById = getMateriasDeCarreraById

module.exports = controller