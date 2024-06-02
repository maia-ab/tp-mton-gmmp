const existsById = (Model) => {

    return async (req, res, next) => {
        const id = req.params.id
        const instancia = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if (!instancia) {
            return res.status(404).json({
                mensaje: `${modelName} con id ${id} no existe.`
            }
            )
        }

        next()
    }
}

const validaSchema = (schema) => {
    return  async (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly: false})
        if (result.error) {
            return res.status(400).json(
                {
                    errores : result.error.details.map( error=> ( {
                        error: error.message
                    })
                )}
            )
        }
        next()
    }
}

const existeRelacionConRegistro = (Model, ModelList) => {

    return async (req, res, next) => {
        const id = req.params.id
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        
        const instancia = await Model.findByPk(id, {
            include: { model: ModelList, as: ModelList.name},
        })
        const lista = instancia[ModelList.name]
        
        if(lista.length){
            return res.status(500).json({
                mensaje: `${modelName} con id ${id} tiene relaciones existentes.`
            }
        )
        } 

        next();
    };
};

module.exports = {existsById, validaSchema, existeRelacionConRegistro}
