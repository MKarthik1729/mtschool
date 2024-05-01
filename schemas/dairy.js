const mongoose = require('mongoose');

// Define Dairy schema
const dairySchema = new mongoose.Schema({
    homework: {
        type: String,
        required: true
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming classId references another collection
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Create Dairy model
const Dairy = mongoose.model('Dairy', dairySchema);

module.exports = Dairy;
