const SchoolClass = require('../schemas/schoolClass');

// Function to create a new class
async function createClass(classData) {
    try {
        const newClass = new SchoolClass(classData);
        const savedClass = await newClass.save();
        return savedClass;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Function to update a class
async function updateClass(classId, updateData) {
    try {
        const updatedClass = await SchoolClass.findByIdAndUpdate(classId, updateData, { new: true });
        return updatedClass;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Function to add a student ID to a class
async function addStudentId(classId, studentId) {
    try {
        const updatedClass = await SchoolClass.findByIdAndUpdate(classId, { $addToSet: { students: studentId } }, { new: true });
        return updatedClass;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Function to add a new subject to the subjects array
async function addNewSubject(classId, newSubject) {
    try {
        const updatedClass = await SchoolClass.findByIdAndUpdate(classId, { $addToSet: { subjects: newSubject } }, { new: true });
        return updatedClass;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllStudentsByClassId(classId) {
    try {
        const schoolClass = await SchoolClass.findById(classId).populate('students');
        if (!schoolClass) {
            throw new Error('Class not found');
        }
        return schoolClass.students;
    } catch (error) {
        throw new Error(error.message);
    }
}


async function getAllClasses() {
    try {
      const teachers = await SchoolClass.find().sort({ class_dealing: 1, class_section: 1 });
      return teachers;
    } catch (error) {
      throw error;
    }
  }

  async function getClassesWithoutTeacher() {
    console.log("hello")
    try {
        const classesWithoutTeacher = await SchoolClass.find({ class_teacher: { $exists: false, $eq: null } });
        console.log(classesWithoutTeacher)
        return classesWithoutTeacher;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createClass,
    updateClass,
    addNewSubject,
    addStudentId,
    getAllStudentsByClassId,
    getAllClasses,
    getClassesWithoutTeacher
  };