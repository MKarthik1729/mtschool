const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Event schema
const eventSchema = new Schema({
  photos: {
    type: [String],
    required: true
  },
  classes: {
    type: [mongoose.Schema.Types.ObjectId],
    required: false  // This is optional, as per your requirement
  },
  date: {
    type: Date,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  type_of_event: {
    type: Number,
    required: true
  }
});

// Create a model from the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
