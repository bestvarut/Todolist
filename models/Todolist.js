const mongoose = require('mongoose');

const TodolistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  fav: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('todolist', TodolistSchema);
