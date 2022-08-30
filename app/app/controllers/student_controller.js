const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;


// Create and Save a new Student
exports.create = async (req, res) => {
  try {

    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    // Create a Student
    const student = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
    // Save Student in the database
    return await Student.create(student)
      // res.send(stdPost)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating Students."
        });
      });

  
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  // Validate request
};


// Retrieve all Students from the database.
exports.findAll = async (req, res) => {
  try {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    return await Student.findAll({ where: condition })
      //  res.send(getAllStd)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Students."
        });
      });

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
};


// Find a single Student with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    return await Student.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Student with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Student with id=" + id
        });
      });
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
};


// Update a Student by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  return await Student.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};



// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  try {

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  const id = req.params.id;
  Student.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};


// Delete all Students from the database.
exports.deleteAll = (req, res) => {
  try {

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  Student.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Students were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Students."
      });
    });
};


// Find all published Students
exports.findAllPublished = async (req, res) => {
  try {
    const StdPublished = await Student.findAll({ where: { published: true } })
    res.send(StdPublished)

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  // .then(data => {
  //   res.send(data);
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while retrieving Students."
  //   });
  // });
};