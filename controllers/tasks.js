const Tasks = require('../models/Tasks');
const Task = require('../models/Tasks');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

// Get all task from db.
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });

  // res.status(500).json({ msg: error });
});

// started from here today - 21 aug 2023

// create a task in db as well as in UI

const createTaks = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });

  // res.status(500).json({ msg: error });
});

const getTasks = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }

  res.status(200).json({ task });

  // res.status(500).json({ msg: error });
});

// delete task from db as well as ui
const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));

    // return res.status(404).json({ msg: `No task with id:${taskID}` });
  }
  res.status(200).json({ task });

  // res.status(500).json({ msg: error });
});

// update task from db as well as ui

const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));

    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }

  res.status(200).json({ task });

  // res.status(500).json({ msg: error });
});

module.exports = {
  getAllTasks,
  createTaks,
  getTasks,
  updateTasks,
  deleteTasks,
};
