const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-schema', 'root', 'kAdzy1kAdzy1', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
