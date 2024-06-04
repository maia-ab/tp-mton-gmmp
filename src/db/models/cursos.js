'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    static associate(models) {
      Cursos.belongsTo(models.Materia, {
        as: 'materia',
        foreignKey: 'materiaId'
      })
      Cursos.belongsToMany(models.Profesores, { through: 'Curso_Profesor'});
    }
    
  }
  Cursos.init({
    comision: DataTypes.STRING,
    turno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cursos',
    tableName: 'Cursos',
    timestamps: false

  });
  return Cursos;
};