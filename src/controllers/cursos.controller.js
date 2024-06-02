const { Where } = require('sequelize/lib/utils')
const {Profesores, Cursos, Materias} = require('../db/models')

const controller = {}

const getAllCursos = async (req, res) => { 
    res.status(200).json(await Cursos.findAll({}))
}
controller.getAllCursos = getAllCursos

const cursoById = async(req, res) => {
    const id = req.params.id
    const curso = await Cursos.findByPk(id)
    res.status(200).json(curso)
}

controller.cursoById = cursoById

const deleteCursoById = async (req, res) => {
    const id = req.params.id
    await Cursos.destroy({where: {id}}) //Probar esto
    res.status(200).json(`El curso con id ${id} se borró con éxito`)
}
controller.deleteCursoById = deleteCursoById

const putCursoById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const cursoActualizar = await Cursos.findByPk(id);
    await cursoActualizar.update(data)  //es como hacer set y save en el mismo
    res.status(200).json(cursoActualizar)      
}

controller.putCursoById = putCursoById

const getProfesoresEnCursoById = async (req, res) => {
    const id = req.params.id
    const curso  = await Cursos.findByPk(id, {
        include: {model: Profesores, as: 'profesores'}
    })
    const profesores = curso.profesores

    res.status(202).json(profesores) // Por qué 202??
}
controller.getProfesoresEnCursoById = getProfesoresEnCursoById

/*
const asociarProfesores = async(req, res) => {
    const  { profesores } = req.body
    const id = req.params.id
    profesores.map(async (profe) => {
    await Curso_Profesor.create({cursoId: id, profesoreId: profe.id})
    })
    res.status(200).json('Se asocio con exito')
}*/

const asociarProfesores = async(req, res) => {
    const { profesores } = req.body;
    const id = req.params.id
    const curso = await Cursos.findByPk(id, {include:{ model: Profesores, as: 'Profesores'}})
    
    for(const profesor of profesores){
        await curso.addProfesores(profesor.id)
    }
    cursoAct = await Cursos.findByPk(id, {include:{ model: Profesores, as: 'Profesores'}})

    res.status(200).json(cursoAct)
}

controller.asociarProfesores = asociarProfesores

module.exports = controller