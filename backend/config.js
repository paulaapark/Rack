const Sequelize = require('sequelize');
const config = new Sequelize("rackDB", "root", "password", {host: 'localhost', dialect: 'mariadb', port: 3307});

module.exports = config;