const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const profesorSchema = Joi.object().keys({
    nombre: Joi.string().required().min(2).max(50).messages({
        "string.min": `Nombre debe tener al menos {#limit} caracteres.`,
        "string.max": `Nombre debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Nombre no puede ser vacío.",
        "any.required": "Nombre es requerido."
    }),
    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD.",
        "any.required": "El campo fechaNacimiento es obligatorio."
    }),
    legajo: Joi.number().integer().min(0).messages({
        "number.min": `Legajo no debe ser menor a {#limit}.`
    }),
    activo: Joi.boolean().required().messages({
        "any.required": "Activo es requerido."
    })

})

module.exports = profesorSchema