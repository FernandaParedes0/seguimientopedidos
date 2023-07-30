const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Profile = require('./profile')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  });

Profile.hasOne(User);
User.belongsTo(Profile);

module.exports = User;