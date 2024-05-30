const {Carreras} = require('../db/models')


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
    return carrera
    
}
controller.crearCarrera = crearCarrera

module.exports = controller