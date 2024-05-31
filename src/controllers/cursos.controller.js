const {Cursos} = require('../db/models')
const {Profesores} = require('../db/models')

const controller = {}

const getAllCursos = async (req, res) => {
    res.status(200).json(await Cursos.findAll({}))
}
controller.getAllCursos = getAllCursos

const cursoById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Cursos.findByPk(id))
}

controller.cursoById = cursoById

const deleteCursoById = async (req, res) => {
    const id = req.params.id
    const row = await Cursos.destroy({where: {id}})
    if(row){
        res.status(200).json(`El curso con id ${id} se borró con éxito`)
    }else{
        res.status(404).json(`El curso con id ${id} no existe`)
    }
}
controller.deleteCursoById = deleteCursoById

const putCursoById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const cursoActualizar = await Cursos.findByPk(id);
    if(!cursoActualizar){
        res.status(404).json(`El curso con id ${id} no existe`)
    }
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

module.exports = controller