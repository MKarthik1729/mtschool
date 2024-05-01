const express = require('express');
const router = express.Router();
const { createTerm, updateTerm } = require('../controllers/termController');

// Create a new term
router.post('/', async (req, res) => {
    try {
        const { academic_year, due_date, term, amount } = req.body;
        const newTerm = await createTerm(academic_year, due_date, term, amount);
        res.status(201).json(newTerm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an existing term
router.put('/:id', async (req, res) => {
    try {
        const termId = req.params.id;
        const updateData = req.body;
        const updatedTerm = await updateTerm(termId, updateData);
        res.json(updatedTerm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
