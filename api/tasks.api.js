const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');
const db = require('../config/db')


router.post('/', async (req, res) => {
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

router.get('/', (req, res) => {
  res.send('Get all tasks');
});

module.exports = router;
