const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users todolist
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all todolist');
});

// @route   POST api/contacts
// @desc    Add new todolist
// @access  Private
router.post('/', (req, res) => {
  res.send('Add new contacts');
});

// @route   PUT api/contacts/:id
// @desc    Update todolist
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

// @route   DELETE api/contacts/:id
// @desc    Delete todolist
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
