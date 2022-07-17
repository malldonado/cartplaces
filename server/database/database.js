const Sequelize = require('sequelize');

const connection = new Sequelize('cartplaces', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;