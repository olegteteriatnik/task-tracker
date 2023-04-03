const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');
const db = require('../config/db')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

router.post('/', async (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({ message: 'description field is required' });
  }
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority
  });

  try {
    const newTask = await Task.create(task);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({}, { __v:0 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:_id', async (req, res) => {
  try {
    const task = await Task.findById(req.params._id, {  __v:0 });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:_id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'title', 'description', 'status', 'priority', 'completed'
  ]
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).json({ message: 'Invalid updates' });
  }

  try {
    const task = await Task.findById(req.params._id, { __v:0 });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    updates.forEach(update => task[update] = req.body[update]);
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.delete('/:_id', async (req, res) => {
  try {
    const task = await Task.findById(req.params._id, {  __v:0 });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await task.deleteOne();
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
