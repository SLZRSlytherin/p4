const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Tambahkan ini
const courseRoutes = require('./routes/courseRoutes');
const videoRoutes = require('./routes/videoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Untuk parsing JSON
app.use(express.urlencoded({ extended: true })); // Untuk parsing URL-encoded
app.use(methodOverride('_method')); // Tambahkan ini untuk mendukung metode override

// Routes
app.use('/', courseRoutes);
app.use('/', videoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});