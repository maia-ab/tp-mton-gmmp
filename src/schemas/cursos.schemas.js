const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().min(1).max(10).messages({
        "string.min": `Comisión debe tener al menos {#limit} caracteres.`,
        "string.max": `Comisión debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Comisión no puede ser vacío."
    }),
    turno: Joi.string().required().min(3).max(10).messages({
        "string.min": `Turno debe tener al menos {#limit} caracteres.`,
        "string.max": `Turno debe tener como máximo {#limit} caracteres.`,
        "string.empty": "Turno no puede ser vacío.",
        "any.required": "Turno es requerido."
    }),
    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD.",
        "any.required": "El campo fechaInicio es obligatorio."
    }),
    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD.",
        "any.required": "El campo fechaFin es obligatorio."
    }),

})

module.exports = cursoSchema