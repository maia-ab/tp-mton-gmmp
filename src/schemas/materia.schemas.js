const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(1).max(35).messages({
        "string.min": `Nombre debe tener al menos {#limit} caracteres.`,
        "string.max": `Nombre debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Nombre no puede ser vacío.",
        "any.required": "Nombre es requerido."
    }),
    cuatrimestral: Joi.boolean().required().messages({
        "any.required": "Cuatrimestral es requerido."
    }),
    anio: Joi.number().integer().min(0).required().messages({
        "number.min": `Año no debe ser menor a {#limit}.`,
        "any.required": "Año es requerido."
    })

})

module.exports = materiaSchema