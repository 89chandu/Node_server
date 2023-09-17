const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the 'path' module

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Admin routes filter
app.use('/admin', adminRoutes);

// Shop routes filter
app.use('/shop', shopRoutes);

// 404 page for routes that don't exist
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
