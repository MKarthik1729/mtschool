// studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  admission_no: {
    type: String,
    required: true
  },
  active:{
    type:Boolean,
    default:true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
