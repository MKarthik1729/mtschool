const express = require('express');
const router = express.Router();
const { createDairy, updateDairy } = require('../controllers/dairyController');

// Route to create a new dairy entry
router.post('/dairy', async (req, res) => {
  const { homework, classId, date } = req.body;
  try {
    const newEntry = await createDairy(homework, classId, date);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update an existing dairy entry
router.put('/dairy/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedEntry = await updateDairy(id, updates);
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
