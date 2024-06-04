'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carreras extends Model {
    static associate(models) {
      Carreras.hasMany(models.Materia, {
        as: 'materias',
        foreignKey: 'carreraId'
      })
    }
  }
  Carreras.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    universidad: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Carreras',
    tableName: 'Carreras',
    timestamps: false
  });
  return Carreras;
};