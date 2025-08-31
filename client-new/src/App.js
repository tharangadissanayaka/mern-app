// App.js
import React from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { Container, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <TaskForm />
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
