const Task = require("../models/taskModel");


// Add a Task
const addTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

// Get all Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get a Task
const getTask = async (req, res) => {
    const {id} = req.params;

    try {
        const task = await Task.findById(id);
        
        if (!task) {
            res.status(404).json(`No such task with id ${id}`);
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Delete a Task
const deleteTask = async (req, res) => {
    const {id} = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            res.status(404).json(`No such task with id ${id}`);
        }
        
        res.status(200).send("Task deleted successfully!");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Update a task
const updateTask = async (req, res) => {
    const {id} = req.params;

    try {
        const task = await Task.findByIdAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
        })

        if (!task) {
            res.status(404).json(`No such task with id ${id}`);
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {
    addTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}