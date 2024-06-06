const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
//const authRoutes = require('./api/routes/auth');
const hotelsRoutes = require('./api/routes/hotels');
//const roomRoutes = require('./api/routes/room');
//const userRoutes = require('./api/routes/user');
//middlewares
//app.use('/auth', authRoutes);
app.use('/hotels', hotelsRoutes);
//app.use('/room', roomRoutes);
//app.use('/user', userRoutes);
//const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening on port 3000');
});