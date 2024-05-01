const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
  academic_year: {
    type: Number,
    required: true
  },
  subject_name: {
    type: String,
    required: true
  },
  class_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SchoolClass', // Assuming you have a Class model defined
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher' // Assuming you have a Teacher model defined
  }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
