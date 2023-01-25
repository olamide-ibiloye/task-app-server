const express = require("express");
const Task = require("../models/taskModel");
const {addTask, getTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController");

const router = express.Router();

router.route("/")
    .get(getTasks)
    .post(addTask);

router.route("/:id")
    .get(getTask)
    .delete(deleteTask)
    .put(updateTask);


module.exports = router