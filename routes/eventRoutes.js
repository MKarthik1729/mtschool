const express = require('express');
const router = express.Router();
const {
  createEvent,
  addClasses,
  getAllEvents,
  getAllEventsForClass,
  updateEvent
} = require('../controllers/eventController');

// Route to create a new event
router.post('/events', async (req, res) => {
  try {
    const { photos, date, summary, type_of_event } = req.body;
    const event = await createEvent(photos, date, summary, type_of_event);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add classes to an event
router.put('/events/:eventId/classes', async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const classes = req.body.classes;
    const updatedEvent = await addClasses(eventId, classes);
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all events
router.get('/getALlEvents', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all events for a specific class
router.get('/classes/:classId/events', async (req, res) => {
  try {
    const classId = req.params.classId;
    const events = await getAllEventsForClass(classId);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update an event
router.put('/events/:eventId', async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const updates = req.body;
      const updatedEvent = await updateEvent(eventId, updates);
      res.json(updatedEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
