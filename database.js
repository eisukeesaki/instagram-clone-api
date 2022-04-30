const Sequelize = require("sequelize");
const ConfigDB = require("./config/config.json").development;

const User = require("./models/user");
const Photo = require("./models/photo");

const connection = new Sequelize(ConfigDB);

User.init(connection);
Photo.init(connection);

module.exports = connection;