const {Materia, Cursos} = require('../db/models')
const controller = {}

const getAllMaterias = async (req, res) => {
    res.status(200).json(await Materia.findAll({}))
}
controller.getAllMaterias = getAllMaterias

const materiaById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Materia.findByPk(id))
}
controller.materiaById = materiaById

const crearMateria = async (req, res) => {
    const materia = await Materia.create(req.body)
    res.status(201).json(materia)
}
controller.crearMateria = crearMateria

const deleteMateriaById = async (req, res) => {
    const id = req.params.id
    await Materia.destroy({where: {id}})
    res.status(200).json(`La materia con id ${id} se borró con éxito`)
}
controller.deleteMateriaById = deleteMateriaById

const crearCursoEnMateriaById = async (req, res) => {
    const id = req.params.id
    await Cursos.create({...req.body, materiaId: id}) 
    const materiaActualizada = await Materia.findByPk (id, {
        include: { model: Cursos, as: 'Cursos'}
    });
    res.status(201).json(materiaActualizada)
    
}
controller.crearCursoEnMateriaById = crearCursoEnMateriaById

const getCursosEnMateriaById = async (req, res) => {
    const id = req.params.id
    const materia  = await Materia.findByPk(id, {
        include: {model: Cursos, as: 'Cursos'}
    })
    const cursos = materia.Cursos

    res.status(200).json(cursos)
}
controller.getCursosEnMateriaById = getCursosEnMateriaById

module.exports = controller