const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Profile = require('./profile');
const User = require('./user')

const Order = sequelize.define('order', {
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
  profile_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},);

// Asociaciones
Order.belongsTo(Profile, { foreignKey: 'profile_id' });
Profile.hasMany(Order, { foreignKey: 'profile_id' });

module.exports = Order;
