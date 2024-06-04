const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

// Formato YYYY-MM-DD
const validateDate = (date) => {
    if (!dateFormatRegex.test(date)) {
        throw new Error('El formato de la fecha debe ser YYYY-MM-DD');
    }
    return date;
};

module.exports = validateDate