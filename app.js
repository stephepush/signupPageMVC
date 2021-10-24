const express = require('express');

require('dotenv').config()

const app = express();

//const db = require('./models/database')

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
app.use(authRoutes);
app.use(userRoutes);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3002);