const Tasks = require('../models/Tasks');
const Task = require('../models/Tasks');

const getAllTasks = (req, res) => {
  res.send('get all task');
};

const createTaks = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTasks = (req, res) => {
  res.send('update Task');
};
const deleteTasks = (req, res) => {
  res.send('delete Task');
};

module.exports = {
  getAllTasks,
  createTaks,
  getTasks,
  updateTasks,
  deleteTasks,
};
