// feeModel.js
const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  due_date: {
    type: String,
    required: true
  },
  payment_status: {
    type: String,
    required: true
  },
  academic_year: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  term: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;
