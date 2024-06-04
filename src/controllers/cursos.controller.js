const { Profesores, Cursos } = require("../db/models");
const controller = {};

const getAllCursos = async (req, res) => {
  res.status(200).json(await Cursos.findAll({}));
};
controller.getAllCursos = getAllCursos;

const cursoById = async (req, res) => {
  const id = req.params.id;
  const curso = await Cursos.findByPk(id);
  res.status(200).json(curso);
};
controller.cursoById = cursoById;

const deleteCursoById = async (req, res) => {
  const id = req.params.id;
  await Cursos.destroy({ where: { id } }); 
  res.status(200).json(`El curso con id ${id} se borró con éxito`);
};
controller.deleteCursoById = deleteCursoById;

const putCursoById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const cursoActualizar = await Cursos.findByPk(id);
  await cursoActualizar.update(data); 
  res.status(200).json(cursoActualizar);
};
controller.putCursoById = putCursoById;


/*
-- Este es el método que hicimos originalmente en el que no se verifica si todos los profesores
-- que mandamos en la lista existe.

*/

/*const asociarProfesores = async(req, res) => {
    const { profesores } = req.body;
    const id = req.params.id
    const curso = await Cursos.findByPk(id, {include:{ model: Profesores, as: 'Profesores'}})
    
    for(const profesor of profesores){
        await curso.addProfesores(profesor.id)
    }
    cursoAct = await Cursos.findByPk(id, {include:{ model: Profesores, as: 'Profesores'}})

    res.status(200).json(cursoAct)
}*/

const asociarProfesores = async (req, res) => {
  const { profesores } = req.body;
  const id = req.params.id;
  const curso = await Cursos.findByPk(id, {
      include: { model: Profesores, as: "Profesores" },
  });

  
  
  for (const profesor of profesores) {
      const existe = await Profesores.findOne({ where: { id: profesor.id } });
      
      if(existe){
          await curso.addProfesores(profesor.id)
        }
    };
    cursoAct = await Cursos.findByPk(id, {
        include: { model: Profesores, as: "Profesores" },
    });
    
    res.status(200).json(cursoAct);
}

controller.asociarProfesores = asociarProfesores;

const getProfesoresEnCursoById = async (req, res) => {
  const id = req.params.id;
  const curso = await Cursos.findByPk(id, {
    include: { model: Profesores, as: "Profesores" },
  });

  res.status(202).json(curso); //Entendemos que debería ser un código 200 pero en la consigna dice 202.
};
controller.getProfesoresEnCursoById = getProfesoresEnCursoById;

module.exports = controller;
