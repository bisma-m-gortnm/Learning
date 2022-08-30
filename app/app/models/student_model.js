module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
      title: {
        type: DataTypes.STRING
       
      },
      description: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN
      }
    });
    return Student;
  };