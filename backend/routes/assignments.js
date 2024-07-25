const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Create an assignment (Teacher)
router.post('/', async (req, res) => {
  const { title, description, dueDate, createdBy } = req.body;
  const assignment = new Assignment({ title, description, dueDate, createdBy });
  try {
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
