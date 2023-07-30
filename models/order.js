const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const profile = require('./profile')

const order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  timestamps: false,
});

order.belongsTo(profile, { as: 'profile', foreignKey: 'user_id' });
module.exports = order;


