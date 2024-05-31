const {Profesores} = require('../db/models')

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
    const datos = req.body;

    const profesor = await Profesores.findByPk(id);
    if (profesor === null) {
        return res.status(404).json({ error: 'El profesor no existe.' });
    }

    await profesor.set(datos) // Esto sólo sirve si le pasas todos los datos, habría que ver si nos sirve o si queremos que se pueda modificar sólo uno. Interpreto que sirve porque en la consigna dice "modificar los datos", no "un dato".
    await profesor.save();

    res.status(200).json(profesor);
}

const eliminarProfesor = async (req, res) => {
    const id = req.params.id;
    const profesor = await Profesores.findByPk(id);

    if (profesor === null) {
        return res.status(404).json({ error: 'Profesor no encontrado' });
    }

        await profesor.destroy();
        res.status(200).json({ message: 'Profesor eliminado correctamente' });
}

controller.eliminarProfesor = eliminarProfesor;


module.exports = controller