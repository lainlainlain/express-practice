const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-schema', 'root', process.env.KEY, {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
