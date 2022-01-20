const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dogs', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.RANGE (INTEGER),
      allowNull:false,
    },
    weight:{
      type: DataTypes.RANGE (INTEGER),
      allowNull: false,
    },
    life_span: {
      type: DataTypes.RANGE (INTEGER),
    },
    imageurl: {
      type: DataTypes.STRING,
    }
  });

  sequelize.define ('Temperaments', {
    name:{
      type: DataTypes.STRING,
    }

  })

};
