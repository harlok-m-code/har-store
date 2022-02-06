const { Sequelize } = require('sequelize');


module.exports = new Sequelize("shop", "mayrbek", "123-Mayrbek", {
    dialect: "mysql",
    host: "localhost"
});