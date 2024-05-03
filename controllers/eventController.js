// Import the Event model
const Event = require('../schemas/event');

// Function to create an event
async function createEvent(photos, date, summary, type_of_event) {
  try {
    const event = new Event({
      photos: photos,
      date: date,
      summary: summary,
      type_of_event: type_of_event
    });

    // Save the event to the database
    const savedEvent = await event.save();
    return savedEvent;
  } catch (error) {
    throw error;
  }
}

async function addClasses(classId, studentId) {
    try {
        const updatedClass = await Event.findByIdAndUpdate(classId, { $addToSet: { classes: studentId } }, { new: true });
        return updatedClass;
    } catch (error) {
        throw new Error(error.message);
    }
}

  

// Function to get all events
async function getAllEvents() {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    throw error;
  }
}

// Function to get all events for a specific class
async function getAllEventsForClass(classId) {
  try {
    const events = await Event.find({ classes: classId });
    return events;
  } catch (error) {
    throw error;
  }
}

async function updateEvent(eventId, updates) {
    try {
      const event = await Event.findByIdAndUpdate(eventId, updates, { new: true });
      if (!event) {
        throw new Error('Event not found');
      }
      return event;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  createEvent,
  addClasses,
  getAllEvents,
  getAllEventsForClass,
  updateEvent
};
