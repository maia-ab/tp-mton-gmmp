const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(2).max(50).messages({
        "string.min": `Nombre debe tener al menos {#limit} caracteres.`,
        "string.max": `Nombre debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Nombre no puede ser vacío.",
        "any.required": "Nombre es requerido."
    }),
    grado: Joi.string().required().min(3).max(15).messages({
        "string.min": `Grado debe tener al menos {#limit} caracteres.`,
        "string.max": `Grado debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Grado no puede ser vacío.",
        "any.required": "Grado es requerido."
    }),
    universidad: Joi.string().required().min(2).max(40).messages({
        "string.min": `Universidad debe tener al menos {#limit} caracteres.`,
        "string.max": `Universidad debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Universidad no puede ser vacío.",
        "any.required": "Universidad es requerido."
    }),

})

module.exports = carreraSchema