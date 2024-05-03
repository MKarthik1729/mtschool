// studentController.js
const Student = require('../schemas/student');

// Function to create a new student
async function createStudent(studentData) {
  try {
    const newStudent = new Student(studentData);
    const savedStudent = await newStudent.save();
    return savedStudent;
  } catch (error) {
    throw error;
  }
}
async function createStudents(studentDataArray) {
  try {
    const newStudents = await Student.insertMany(studentDataArray);
    return newStudents;
  } catch (error) {
    throw error;
  }
}
// Function to update a student by ID
async function updateStudentById(studentId, updatedData) {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedData, { new: true });
    return updatedStudent;
  } catch (error) {
    throw error;
  }
}

// Function to delete a student by ID
async function deleteStudentById(studentId) {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    return deletedStudent;
  } catch (error) {
    throw error;
  }
}

// Function to get all students
async function getAllStudents() {
  try {
    const students = await Student.find({});
    return students;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createStudent,
  updateStudentById,
  deleteStudentById,
  getAllStudents,
  createStudents
};
