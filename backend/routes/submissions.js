const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Upload assignment (Student)
router.post('/', async (req, res) => {
  const { assignment, student, file } = req.body;
  const submission = new Submission({ assignment, student, file });
  try {
    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Grade submission (Teacher)
router.patch('/:id', async (req, res) => {
  const { grade } = req.body;
  try {
    const submission = await Submission.findById(req.params.id);
    if (submission) {
      submission.grade = grade;
      await submission.save();
      res.status(200).json(submission);
    } else {
      res.status(404).json({ error: 'Submission not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
