'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_time.init({
    event_id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      allowNull: true,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    band_id: {
      type:DataTypes.INTEGER,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull:false
    },
    set_time_id: {
      type:DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'set_time',
    tablename: 'set_time',
    timestamps: false
  });
  return set_time;
};