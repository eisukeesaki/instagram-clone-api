'use strict';

const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;

/*
    Model
        represents single table
        abstraction that represents Users table
    sequelize
        connection instance
    DataTypes
        instance that defines datatypes of column values
    User.init()
        static method of Model class 
    static methods
        methods that are called on classes
        often utility functions
            create_object()
            clone_object()
        not replicated across instances
*/
