const express = require('express');
const router = express.Router();
const { createClass, updateClass, addStudentId, addNewSubject, getAllStudentsByClassId,
getAllClasses,getClassesWithoutTeacher
} = require('../controllers/schoolController');

// Route to create a new class
router.post('/createClass', async (req, res) => {
    try {
        const newClass = await createClass(req.body);
        res.json(newClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to update a class
router.put('/updateClass/:classId', async (req, res) => {
    try {
        const updatedClass = await updateClass(req.params.classId, req.body);
        res.json(updatedClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to add a student ID to a class
router.put('/addStudent/:classId/:studentId', async (req, res) => {
    try {
        const updatedClass = await addStudentId(req.params.classId, req.params.studentId);
        res.json(updatedClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to add a new subject to a class
router.put('/addNewSubject/:classId', async (req, res) => {
    try {
        const updatedClass = await addNewSubject(req.params.classId, req.body.newSubject);
        res.json(updatedClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get('/getAllStudents/:classId', async (req, res) => {
    try {
        const students = await getAllStudentsByClassId(req.params.classId);
        res.json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/getallclasses', async (req, res) => {
    try {
      const teachers = await getAllClasses();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/getClassesWithoutTeacher', async (req, res) => {
    try {
        const classesWithoutTeacher = await getClassesWithoutTeacher();
        res.json(classesWithoutTeacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
