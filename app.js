const express = require('express');

require('dotenv').config()

const app = express();

//const db = require('./models/database')

app.set('view engine', 'ejs');

app.listen(3002);