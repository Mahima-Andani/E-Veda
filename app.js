// importing necessary dependancies
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./database/connection');

const app = express();

dotenv.config({ path : 'config.env'});

const PORT = process.env.PORT || 8080;
// mongodb connection
connectDB();

// connecting to localhost
app.get('/', (req, res) => res.send('Hello!'));
app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));