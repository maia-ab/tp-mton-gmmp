'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      Materia.hasMany(models.Cursos,{
        as:'Cursos',
        foreignKey: 'materiaId'
      })
      Materia.belongsTo(models.Carreras, {
        as: 'carreras',
        foreignKey: 'carreraId'
      })
    }
  }
  Materia.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuatrimestral: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'Materia',
    timestamps: false
  });
  return Materia;
};