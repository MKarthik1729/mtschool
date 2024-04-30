const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for schoolclass
const SchoolClassSchema = new Schema({
    class_section: { type: String, required: true },
    academic_year: { type: Number, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    class_dealing: { type: Number, required: true },
    class_teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    subjects: [{ type: String }]
});

// Create model from schema
const SchoolClass = mongoose.model('SchoolClass', SchoolClassSchema);

module.exports = SchoolClass;
