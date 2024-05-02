const Teacher = require('../schemas/teacher'); // Assuming you've defined the Teacher model in a separate file

// Function to add a new teacher
async function addNewTeacher(name, mobile, class_dealing, active = true) {
  try {
    const newTeacher = new Teacher({
      name,
      mobile,
      class_dealing,
      active
    });
    const savedTeacher = await newTeacher.save();
    return savedTeacher;
  } catch (error) {
    throw error;
  }
}

// Function to get all teachers
async function getAllTeachers() {
  try {
    const teachers = await Teacher.find({});
    return teachers;
  } catch (error) {
    throw error;
  }
}

// Function to update a teacher
async function updateTeacher(id, update) {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, update, { new: true });
    return updatedTeacher;
  } catch (error) {
    throw error;
  }
}

async function deleteTeacher(id) {
  try {
    await Teacher.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
}


module.exports = {
  addNewTeacher,
  getAllTeachers,
  updateTeacher,
  deleteTeacher
};
