// Import required modules and libraries
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Import the router for web routes (likely defined in './routes/web.js')
const router = require('./routes/web');

// Set up View Engine
app.set('view engine', 'ejs');
// Set the directory where views/templates are located
app.set('views', path.join(__dirname, 'views'));

// Import a function 'connectMongo' to establish a database connection
const  connectMongo  = require('./app/Database/db');
// Call the database connection function to connect to MongoDB

// Define the path to the public directory to serve static assets (CSS, JS, images, etc.)
const publicPath = path.join(__dirname, 'public');
// Serve static assets from the 'public' directory
app.use(express.static(publicPath));
// Configure body-parser middleware to parse incoming request data
app.use(bodyParser.urlencoded({ extended: true }));

// Parse URL-encoded request bodies and JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use the defined router for handling web routes
app.use(router);

// Port Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`My server is running on port ${PORT}`);
});
