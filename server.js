const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors middleware
const taskRoutes = require('./routes/taskRoutes'); // Import task routes

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all requests
app.use(cors()); // This will allow all origins by default

app.use(express.json()); // Middleware to parse JSON requests

// Use task routes for all "/api" requests
app.use('/api', taskRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Test route for server
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
