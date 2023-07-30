const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const order = require('./order');

const profile = sequelize.define('profile', {
  id: {  
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, 
});

// asociación
profile.hasMany(order, { as: 'orders', foreignKey: 'user_id' });

module.exports = profile;



