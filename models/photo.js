'use strict';

const { Model, DataTypes } = require('sequelize');

class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        body: DataTypes.TEXT,
        photo_url: DataTypes.STRING
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Photo;

/*
    Model
        represents single table
        abstration that represents Photos table
    sequelize
        connection instance
    Photo.init
        static method of Model class
        attatches Model to connection instance
    static methods
        methods that are called on classes
        often utility functions
            create_object()
            clone_object()
        not replicated across instances
*/
