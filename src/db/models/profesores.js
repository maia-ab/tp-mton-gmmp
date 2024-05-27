'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesores.init({
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    legajo: DataTypes.NUMBER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Profesores',
  });
  return Profesores;
};