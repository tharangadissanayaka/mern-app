// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [due_date, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title, description, status, due_date };

        axios.post('http://localhost:5000/api/tasks', newTask)
            .then(response => {
                alert('Task added successfully');
                setTitle('');
                setDescription('');
                setStatus('pending');
                setDueDate('');
            })
            .catch(error => {
                console.error('Error adding task:', error);
            });
    };

    return (
        <Box sx={{ maxWidth: 500, margin: 'auto', padding: 2, boxShadow: 3, borderRadius: 2, backgroundColor: '#f9f9f9' }}>
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    fullWidth 
                    label="Task Title" 
                    variant="outlined" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                    sx={{ marginBottom: 2 }}
                />
                <TextField 
                    fullWidth 
                    label="Task Description" 
                    variant="outlined" 
                    multiline
                    rows={4} 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                    sx={{ marginBottom: 2 }}
                />
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        label="Status"
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="in-progress">In Progress</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                    fullWidth 
                    type="date" 
                    label="Due Date" 
                    variant="outlined" 
                    value={due_date} 
                    onChange={(e) => setDueDate(e.target.value)} 
                    required 
                    sx={{ marginBottom: 2 }}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                >
                    Add Task
                </Button>
            </form>
        </Box>
    );
};

export default TaskForm;
