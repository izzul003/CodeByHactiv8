'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.User, {through: models.UserCourse})
    }
  };
  Course.init({
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  Course.addHook('beforeCreate', (course, options)=>{
    if(course.label == ''){
      course.label = 'Belum Dilabeli'
    }
  })

  return Course;
};