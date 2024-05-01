const express = require('express');
const router = express.Router();
const { createSubject, updateSubject } = require('../controllers/subjectController'); // Assuming you have a subjectController.js file where the functions are defined

// Route to create a new subject
router.post('/subjects', async (req, res) => {
  try {
    const {
        academic_year,
        subject_name,
        class_Id,
        teacher
      } = req.body;
    const newSubject = await createSubject(academic_year,subject_name,class_Id,teacher);
    res.json(newSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update an existing subject
router.put('/subjects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    const updatedSubject = await updateSubject(id, updateFields);
    res.json(updatedSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
