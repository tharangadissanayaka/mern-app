const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// CREATE a new task
router.post('/tasks', async (req, res) => {
    try {
        const { title, description, due_date, status } = req.body;
        const newTask = new Task({ title, description, due_date, status });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: 'Error creating task' });
    }
});

// READ all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ error: 'Error fetching tasks' });
    }
});

// UPDATE a task
router.put('/tasks/:id', async (req, res) => {
    try {
        const { title, description, due_date, status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, due_date, status },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: 'Error updating task' });
    }
});

// DELETE a task
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error deleting task' });
    }
});

module.exports = router;
