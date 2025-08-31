const mongoose = require('mongoose');

// Define Task Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    due_date: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['in-progress', 'completed', 'pending'],
        default: 'pending'
    }
});

// Create a model based on the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
