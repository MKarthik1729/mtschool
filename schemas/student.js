const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class_study: {
    type: Number,
    required: true
  },
  section_study: {
    type: String,
    required: true
  },
  fee_bal: {
    type: [Boolean],
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
