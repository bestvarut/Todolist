const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Todolist = require('../models/Todolist');

// @route   GET api/todolist
// @desc    Get all users todolist
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const todolists = await Todolist.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(todolists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/todolist/fav
// @desc    Get all users Favorite todolist
// @access  Private
router.get('/fav', auth, async (req, res) => {
  try {
    const todolists = await Todolist.find({
      user: req.user.id,
      fav: true,
    }).sort({
      date: -1,
    });
    res.json(todolists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/todolist/done
// @desc    Get all users Done todolist
// @access  Private
router.get('/done', auth, async (req, res) => {
  try {
    const todolists = await Todolist.find({
      user: req.user.id,
      done: true,
    }).sort({
      date: -1,
    });
    res.json(todolists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/todolist/undone
// @desc    Get all users Undone todolist
// @access  Private
router.get('/undone', auth, async (req, res) => {
  try {
    const todolists = await Todolist.find({
      user: req.user.id,
      done: false,
    }).sort({
      date: -1,
    });
    res.json(todolists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contacts
// @desc    Add new todolist
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Please Include Todolist name')
        .not()
        .isEmpty(),
      check('info', 'Please Include Todolist info')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, info, done, fav } = req.body;
    try {
      const newTodolist = new Todolist({
        name,
        info,
        done,
        fav,
        user: req.user.id,
      });

      const todolist = await newTodolist.save();

      res.json(todolist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    Update todolist
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, info, done, fav } = req.body;

  //Build todolist object
  const todolistFields = {};
  if (name) todolistFields.name = name;
  if (info) todolistFields.info = info;
  if (done) todolistFields.done = done;
  if (fav) todolistFields.fav = fav;

  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/contacts/:id
// @desc    Delete todolist
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
