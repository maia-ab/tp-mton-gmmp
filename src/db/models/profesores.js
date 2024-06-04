'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesores extends Model {
    static associate(models) {
      Profesores.belongsToMany(models.Cursos, { through: 'Curso_Profesor' });
    }
  }
  Profesores.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    legajo: DataTypes.INTEGER,
    activo: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Profesores',
    timestamps: false
  });
  return Profesores;
};