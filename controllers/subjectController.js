const Subject = require('../schemas/subject'); // Assuming subjectModel.js contains the schema definition

async function createSubject(academic_year, subject_name, class_Id=null, teacher=null) {
  try {
    const subject = new Subject({
      academic_year,
      subject_name,
      class_Id,
      teacher
    });
    const savedSubject = await subject.save();
    return savedSubject;
  } catch (error) {
    throw error;
  }
}

async function updateSubject(subjectId, updateFields) {
  try {
    const updatedSubject = await Subject.findByIdAndUpdate(subjectId, updateFields, { new: true });
    return updatedSubject;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createSubject,
  updateSubject
};
