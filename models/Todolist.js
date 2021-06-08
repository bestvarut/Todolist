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
  progress: {
    type: String,
    default: 'Undone',
  },
  fav: {
    type: String,
    default: 'false',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  datestring: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('todolist', TodolistSchema);
