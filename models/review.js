const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const review = sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = review;
