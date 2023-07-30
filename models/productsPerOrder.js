const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const productsPerOrder = sequelize.define('products_per_order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = productsPerOrder;
