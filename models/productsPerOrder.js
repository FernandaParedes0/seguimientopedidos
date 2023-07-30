const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Order = require('./order');

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
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Asociaciones
productsPerOrder.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(productsPerOrder, { foreignKey: 'orderId' });
productsPerOrder.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(productsPerOrder, { foreignKey: 'productId' });