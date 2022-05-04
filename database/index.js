const Sequelize = require("sequelize");
const dbConfig = require("./dbConfig");

const User = require("../models/user");
const Photo = require("../models/photo");

const connection = new Sequelize(dbConfig);

User.init(connection);
// - - - - - - - - - - - - - - - - - - + - - - - - - - - - - - - - - test db connection
(async function testConn() {
  try {
    await connection.authenticate();
    console.log('successfully connected to database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
// - - - - - - - - - - - - - - - - - - + - - - - - - - - - - - - - - /test db connection

Photo.init(connection);
// - - - - - - - - - - - - - - - - - - + - - - - - - - - - - - - - - test db connection
(async function testConn() {
  try {
    await connection.authenticate();
    console.log('successfully connected to database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
// - - - - - - - - - - - - - - - - - - + - - - - - - - - - - - - - - test db connection

module.exports = connection;