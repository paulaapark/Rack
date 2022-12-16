const Sequelize = require('sequelize');
const config = new Sequelize("rack", "root", "password", {dialect: 'mariadb', port: 3307});

module.exports = config;