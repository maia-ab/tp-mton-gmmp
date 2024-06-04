const {Profesores, Cursos} = require('../db/models')

const controller = {}

const getAllProfesores = async (req, res) => {
    res.status(200).json(await Profesores.findAll({}))
}
controller.getAllProfesores = getAllProfesores

const profesorById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Profesores.findByPk(id))
}
controller.profesorById = profesorById

const crearProfesor = async (req, res) => {
    const profesor = await Profesores.create(req.body)
    res.status(201).json(profesor)
    
}
controller.crearProfesor = crearProfesor

const actualizarProfesor = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const profesor = await Profesores.findByPk(id);
    await profesor.update(data);

    res.status(200).json(profesor);
}
controller.actualizarProfesor = actualizarProfesor

const eliminarProfesor = async (req, res) => {
    const id = req.params.id;
    const profesor = await Profesores.findByPk(id);

    await profesor.destroy(); 
    res.status(200).json({ message: 'Profesor eliminado correctamente' });
}
controller.eliminarProfesor = eliminarProfesor;

const getCursosEnProfesoresById = async (req, res) => {
    const id = req.params.id
    const profesor  = await Profesores.findByPk(id, {
        include: {model: Cursos, as: 'Cursos'}
    })
    
    res.status(200).json(profesor)
}
controller.getCursosEnProfesoresById = getCursosEnProfesoresById


module.exports = controller