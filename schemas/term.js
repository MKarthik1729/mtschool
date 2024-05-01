const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
    academic_year: {
        type: Number,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    term: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: false
    }
});

const Term = mongoose.model('Term', termSchema);

module.exports = Term;
