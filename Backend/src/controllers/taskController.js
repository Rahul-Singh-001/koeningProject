const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {

    const { title, description, assignedUser } = req.body;

    if (!title || !description || !assignedUser) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      task
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getTasks = async (req, res) => {
  try {

    const { status, assignedUser } = req.query;

    let filter = {};

    if (status) {
      filter.status = status;
    }

    if (assignedUser) {
      filter.assignedUser = assignedUser;
    }

    const tasks = await Task.find(filter)
      .populate("assignedUser");

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updateTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.deleteTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndDelete(
      req.params.id
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getTaskSummary = async (req, res) => {
  try {

    const tasks = await Task.find();

    const summary = tasks.reduce(
      (acc, task) => {

        acc.total++;

        if (task.status === "completed") {
          acc.completed++;
        }

        if (task.status === "pending") {
          acc.pending++;
        }

        if (task.status === "in-progress") {
          acc.inProgress++;
        }

        return acc;

      },
      {
        total: 0,
        completed: 0,
        pending: 0,
        inProgress: 0
      }
    );

    res.status(200).json(summary);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};