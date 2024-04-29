const express = require('express');
const router = express.Router();
const { addNewTeacher, getAllTeachers, updateTeacher } = require('../controllers/teacherController');

// Route to add a new teacher
router.post('/createteacher', async (req, res) => {
  try {
    const { name, mobile, class_dealing, active } = req.body;
    const newTeacher = await addNewTeacher(name, mobile, class_dealing, active);
    res.json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a teacher
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedTeacher = await updateTeacher(id, update);
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all teachers
router.get('/getallteachers', async (req, res) => {
  try {
    const teachers = await getAllTeachers();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
