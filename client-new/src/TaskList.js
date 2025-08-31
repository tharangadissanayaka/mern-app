// TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <h2>Task List</h2>
            <Grid container spacing={3}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Grid item xs={12} sm={6} md={4} key={task._id}>
                            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
                                        {task.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                                        {task.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary" sx={{ marginBottom: 1 }}>
                                        Status: <strong>{task.status}</strong>
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Due Date: <strong>{new Date(task.due_date).toLocaleDateString()}</strong>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary">No tasks available.</Typography>
                )}
            </Grid>
        </Box>
    );
};

export default TaskList;
