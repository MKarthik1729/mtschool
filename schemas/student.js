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
  },
  phone:{
    type:Number,
    required:true,
    default:999999999
  },
  admission_no:{
    type:String,
    required:true,
    default:'MTS0000'
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
