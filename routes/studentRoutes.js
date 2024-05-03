const express = require('express');
const router = express.Router();
const {
  createStudent,
  updateStudentById,
  deleteStudentById,
  getAllStudents,
  createStudents
} = require('../controllers/studentController');

router.get('/', (req, res) => {
  res.send('Hello from routes!');
});

// Create a new student
router.post('/createstudent', async (req, res) => {
  try {
    const newStudent = await createStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/addmultiplestudents', async (req, res) => {
  try {
    const newStudent = await createStudents(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a student by ID
router.put('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const updatedStudent = await updateStudentById(studentId, req.body);
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const deletedStudent = await deleteStudentById(studentId);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all students
router.get('/getallstudents', async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
